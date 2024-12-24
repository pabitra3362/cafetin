import React from "react";
import {toast, ToastContainer} from 'react-toastify';
import axios from 'axios';

const OrderCard = ({
  img,
  title,
  price,
  user,
  quantity,
  isDone,
  admin = false,
  total = false,
  id = "",
  setToogle
}) => {

  const handleChangeOrder = async() => {
    try {
      const res=await axios.put('https://cafelin.onrender.com/api/order/changeOrderStatus',{id});
      const data=await res.data;
      if(data.status===201){
        toast.success(res.message)
        setToogle((prev)=>!prev)
      }else{
        toast.error(res.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };
  return (
    <div>
      <ToastContainer theme="dark"/>
      <div
        hidden={isDone}
        className="w-full md:w-[80vw] lg:w-[80vw] px-3 mx-auto"
      >
        <div className="flex justify-around lg:justify-around gap-1 items-center bg-white shadow-md shadow-black my-5 py-3  rounded-lg lg:px-3">
          <div className="w-40 h-48 lg:w-20 lg:h-20 object-fill  overflow-hidden flex justify-center items-cemter rounded-lg">
            <img className="w-40 lg:w-20" src={img} alt="img" />
          </div>
          <div className="information grid lg:flex justify-item-start lg:justify-around items-start lg:items-center w-36 lg:w-[800px] gap-2">
            <div className="title text-black font-bold text-2xl lg:w-80">
              {title}
            </div>
            <div className="price font-bold text-lg lg:w-16 flex justify-start items-center gap-2 text-black">
              <div className="lg:hidden">Price: </div>
              <div>{price} Rs</div>
            </div>
            <div className="quantity font-bold text-black">
              Quantity: {quantity}
            </div>
            {total && (
              <div className="total font-bold text-black">
                Total: {quantity * price} Rs
              </div>
            )}
            {user && (
              <div className="quantity flex justify-between w-full lg:w-28 items-center rounded-lg text-black font-bold">
                <p>User: {user}</p>
              </div>
            )}
            {admin && (
              <div>
                <button
                  onClick={handleChangeOrder}
                  className="finish bg-custom-brown text-white text-lg font-bold px-3 rounded-lg py-2"
                >
                  clear order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
