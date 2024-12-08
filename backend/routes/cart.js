import express from "express";
import Cart from "../model/cartSchema.js";

const router = express.Router();

// POST route to handle adding to the cart
router.post("/addToCart", async (req, res) => {
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

// POST route to handle fetching all carts
router.post("/listCartItem", async (req, res) => {
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

// PUT route to handle quanity change in the cart item
router.put("/changeCart", async (req, res) => {
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

// DELETE route handle deleting cart
router.delete("/deleteCart", async (req, res) => {
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

export default router;
