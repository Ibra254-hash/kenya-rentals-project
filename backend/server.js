const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let properties = [
  {
    id: 1,
    title: "Bedsitter",
    location: "Nairobi",
    price: 10000,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
  },
  {
    id: 2,
    title: "1 Bedroom Apartment",
    location: "Nairobi",
    price: 18000,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
  },
  {
    id: 3,
    title: "2 Bedroom Apartment",
    location: "Nairobi",
    price: 35000,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
  },
  {
    id: 4,
    title: "3 Bedroom Apartment",
    location: "Nakuru",
    price: 55000,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
  },
  {
    id: 5,
    title: "4 Bedroom Family House",
    location: "Kisumu",
    price: 75000,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    id: 6,
    title: "Luxury Villa",
    location: "Mombasa",
    price: 120000,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227"
  },
  {
    id: 7,
    title: "2 Bedroom House For Sale",
    location: "Nakuru",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
  },
  {
    id: 8,
    title: "3 Bedroom House For Sale",
    location: "Nairobi",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  },
  {
    id: 9,
    title: "4 Bedroom Mansion",
    location: "Karen, Nairobi",
    price: 25000000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811"
  },
  {
    id: 10,
    title: "Modern Bungalow",
    location: "Eldoret",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  },
  {
    id: 11,
    title: "Beachfront Villa",
    location: "Diani",
    price: 35000000,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde"
  },
  {
    id: 12,
    title: "Luxury Penthouse",
    location: "Westlands, Nairobi",
    price: 45000000,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  }
];

// GET ALL PROPERTIES
app.get("/properties", (req, res) => {
  res.json(properties);
});

// ADD PROPERTY
app.post("/properties", (req, res) => {
  const newProperty = {
    id: properties.length + 1,
    title: req.body.title,
    location: req.body.location,
    price: req.body.price,
    image: req.body.image
  };

  properties.push(newProperty);

  res.json(newProperty);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});