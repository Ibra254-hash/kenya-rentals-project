const API ="https://kenya-rentals-project.onrender.com/properties";

let allProperties = [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// LOAD DATA
async function loadProperties() {
  try {
    const res = await fetch(API);
    allProperties = await res.json();
    display(allProperties);
  } catch (err) {
    console.log("Error loading data:", err);
  }
}

// DISPLAY PROPERTIES
function display(data) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  data.forEach(p => {
    container.innerHTML += `
      <div class="card" onclick="openProperty(${p.id})">

        <div class="heart" onclick="event.stopPropagation(); toggleFavorite(${p.id})">
  ${favorites.includes(p.id) ? "❤️" : "🤍"}
</div>

        <img src="${p.image}" alt="${p.title}">

        <div class="card-content">
          <h3>${p.title}</h3>
          <p>📍 ${p.location}</p>
          <p class="price">KSH ${Number(p.price).toLocaleString()}</p>
        </div>

      </div>
    `;
  });
}

// SEARCH
window.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("searchInput");

  search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = allProperties.filter(p =>
      p.title.toLowerCase().includes(value) ||
      p.location.toLowerCase().includes(value) ||
      String(p.price).includes(value)
    );

    display(filtered);
  });

  loadProperties();
});

// OPEN PROPERTY PAGE
function openProperty(id) {
  window.location.href = `property.html?id=${id}`;
}

// FAVORITES SYSTEM
function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  display(allProperties);
}