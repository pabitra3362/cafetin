const mongoose=require('mongoose')

const cartSchema = new mongoose.Schema({
  image: {
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
  quantity:{
    type:Number,
    require:true,
  },
});

const cart = mongoose.model("cart", cartSchema);
module.exports = cart;
