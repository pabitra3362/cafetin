import mongoose, { model } from 'mongoose'

const { Schema }=mongoose;

const cartSchema = new Schema({
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
  quantity: {
    type: Number,
    require: true,
  },
});

export default model("cart", cartSchema);

