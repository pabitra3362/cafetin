import express from "express";
import Payment from "../model/paymentSchema.js";
import config from "../config.js";
import Razorpay from "razorpay";
import crypto from "crypto";

const router = express.Router();

const razorpayInstance = new Razorpay({
  key_id: config.razorpay_key,
  key_secret: config.razorpay_secret,
});

// ROUTE 1 : Create Order Api Using POST Method http://localhost:3000/api/payment/order
router.post("/order", (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: Number(amount * 100), // Amount in paise
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log("Error from Razorpay: ", error); // Log Razorpay error
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      res.status(200).json(order);
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

// ROUTE 2 : Create Verify Api Using POST Method http://localhost:4000/api/payment/verify
router.post("/verify", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } =
    req.body;

  // console.log("req.body", req.body);

  try {
    // Create Sign
    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    // Create ExpectedSign
    const expectedSign = crypto
      .createHmac("sha256", config.razorpay_secret)
      .update(sign.toString())
      .digest("hex");

    // console.log(razorpay_signature===expectedSign);

    // Create isAuthentic
    const isAuthentic = expectedSign === razorpay_signature;

    // Condition
    if (isAuthentic) {
      const payment = new Payment({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        amount
      });

      // Save Payment
      await payment.save();

      // Send Message
       res.json({
        message: "Payment Successfull",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

export default router;
