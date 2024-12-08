import React, { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";

const CartCard = ({
  id,
  img,
  title,
  quantity,
  price,
  cart,
  setCart,
  total,
  setTotal,
}) => {
  const { user } = useAuth0();
  const [count, setCount] = useState(quantity);

  const handleQuantity = async (change) => {
    var newQuantity = Math.max(count + change, 1);
    setCount(newQuantity);
    const itemPrice = price; // Assuming `price` is in Rs
    const oldTotal = total;
    const newTotal = oldTotal + (newQuantity - count) * itemPrice; // Recalculate the total

    setTotal(newTotal);
    const response = await axios.put("/api/cart/changeCart", {
      quantity: newQuantity,
      id,
    });
    const data = await response.data;
  };

  const handleDelete = async () => {
    const itemPrice = price * count; // Price of the deleted item
  const newTotal = total - itemPrice; // Subtract the price of the deleted item
  setTotal(newTotal); 
    setCart(
      cart.filter((item) => {
        return item._id !== id;
      })
    );

    try {
      const response = await axios.delete("/api/cart/deleteCart", {
        data: {
          id,
        },
      });
      const data = await response.data;
      if (data.status === 201) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full md:w-[80vw] lg:w-[80vw] px-3 mx-auto">
      <ToastContainer theme="dark" />
      <div className="flex justify-around lg:justify-around gap-1 items-center bg-white shadow-md shadow-black my-5 py-3  rounded-lg lg:px-3">
        <div className="w-40 h-40 lg:w-20 lg:h-20 object-fill  overflow-hidden flex justify-center items-cemter rounded-lg">
          <img className="w-40 lg:w-20" src={img} alt="img" />
        </div>
        <div className="information grid lg:flex justify-item-start lg:justify-around items-start lg:items-center w-36 lg:w-[800px] gap-2">
          <div className="title text-black font-bold text-2xl lg:w-80">
            {title}
          </div>
          <div className="price font-bold text-lg lg:w-16 flex justify-start items-center gap-2">
            <div className="lg:hidden">Price: </div>
            <div>{price} Rs</div>
          </div>
          <div className="quantity flex justify-between w-full lg:w-28 items-center rounded-lg">
            <button
              onClick={() => handleQuantity(-1)}
              className="minus w-12 bg-custom-brown text-white text-3xl font-bold px-3 rounded-lg "
            >
              -
            </button>
            <div className="quantity">{count}</div>
            <button
              onClick={() => handleQuantity(1)}
              className="plus w-12 bg-custom-brown text-white text-3xl font-bold px-3 rounded-lg"
            >
              +
            </button>
          </div>
          <div
            onClick={handleDelete}
            className="border border-black rounded-lg p-2 text-center font-bold transition duration-200 hover:border-custom-brown hover:text-custom-brown"
          >
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
