import mongoose, { model } from 'mongoose'

const { Schema }=mongoose;

const orderSchema = new Schema({
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
  isDone: {
    type: Boolean,
    default: false,
  },
});

export default model("order", orderSchema);

