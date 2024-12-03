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
    const result=await Cart.find({title:data.title})
    if(result.length>0){
       return res.json({message:"Item already exists in cart",status:400})
    }else{

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
    console.error("Error in /addToCart:", error); // Log any errors
    res.status(500).json({ message: "Internal server error", status: 500 });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
