import "dotenv/config.js";

const config = {
  port: process.env.VITE_PORT,
  mongo_url: process.env.VITE_MONGODB_URI,
  razorpay_key: process.env.RAZORPAY_KEY_ID,
  razorpay_secret: process.env.RAZORPAY_SECRET,
};

export default config;
