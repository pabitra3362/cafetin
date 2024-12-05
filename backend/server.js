const express = require("express");
const config = require("./config");
const mongoose = require("mongoose");
const Cart = require("./model/cartSchema");
const app = express();
const port = config.port || 3000;

app.use(express.json()); // Middleware to parse JSON data

async function mongoConnect() {
  try {
    const connection = await mongoose.connect(config.mongo_url);
    if (connection) {
      console.log("Connected to MongoDB");
    } else {
      console.log("Failed to connect to MongoDB");
    }
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
  }
}

mongoConnect();

// Route to test if the server is working
app.get("/", (req, res) => {
  res.send("Hello World");
});

// POST route to handle adding to the cart
app.post("/addToCart", async (req, res) => {
  try {
    const data = req.body;
    const result = await Cart.find({ title: data.title, user: data.user });
    if (result.length > 0) {
      return res.json({ message: "Item already exists in cart", status: 400 });
    } else {
      const response = await Cart.create(data);
      response.save;
      if (response) {
        res.status(201).json({ message: "Item added to cart", status: 201 });
      } else {
        res
          .status(400)
          .json({ message: "Failed to add item to cart", status: 400 });
      }
    }
  } catch (error) {
    console.error("Error in /addToCart:", error.message); // Log any errors
    res.status(500).json({ message: "Internal server error", status: 500 });
  }
});

app.post("/listCartItem", async (req, res) => {
  try {
    const data = await req.body;
    const result = await Cart.find({ user: data.user });
    if (result.length > 0) {
      return res.status(201).json({ message: result, status: 201 });
    } else {
      return res
        .status(400)
        .json({ message: `dont'have anything for ${data.user}`, status: 400 });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", status: 500 });
  }
});

app.put("/changeCart", async (req, res) => {
  try {
    const data = await req.body;
    const result = await Cart.updateOne(
      { _id: data.id },
      { $set: { quantity: data.quantity } }
    );
    if (result.modifiedCount > 0) {
      return res.json({ message: "Cart changed", status: 201 });
    } else {
      return res.json({ message: "Cart not changed", status: 400 });
    }
  } catch (error) {
    res.status(500).json({ message: "Inter server error", status: 500 });
  }
});

app.delete("/deleteCart", async (req, res) => {
  try {
    const data = await req.body;
    const result = await Cart.deleteOne({ _id: data.id });
    if (result.deletedCount > 0) {
      res.json({ message: "Cart deleted", status: 201 });
    } else {
      res.json({ message: "Cart not deleted", status: 400 });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal serverl error", status: 500 });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
