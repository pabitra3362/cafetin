const mongoose=require('mongoose')

const cartSchema = new mongoose.Schema({
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  user: {
    type: String,
    require: true,
  },
});

const cart = mongoose.model("cart", cartSchema);
module.exports = cart;
