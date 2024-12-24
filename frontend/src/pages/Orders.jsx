import React, { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import emptyOrder from "../assets/emptyOrder.mp4";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    return async () => {
      try {
        if(isAuthenticated){
          
          const userOrders = await axios.post(
            "https://cafelin.onrender.com/api/order/getOrders",
            { user: user.name }
          );
          const data = await userOrders.data;
          if (data.status === 200) {
            setOrders(data.message);
          }else{
            setOrders([]);
          }
        }
      } catch (error) {
        console.error(error.message);
        
      }
    };
  }, []);
  return (
    <div>
      {orders.length === 0 ? (
        <div className="h-screen flex justify-center items-center ">
          <div className="grid justify-items-center items-center gap-3">
            <div className="bg-transparent">
              <video src={emptyOrder} loop autoPlay></video>
            </div>
            <p className="text-black font-bold text-2xl">Your Order List Is Empty</p>
            <p className="text-center">
              Looks like you haven't made your choice yet. Browse our menu to
              find the perfect dish for you.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <motion.h2
            animate={{
              x: [-100, 100, 0],
              rotate: [-270, 0],
              transition: {
                duration: 1,
                type: "spring",
              },
            }}
            className="text-custom-brown text-center text-4xl my-8 lg:my-28 underline font-bold"
          >
            Orders
          </motion.h2>
          <div className="my-10 min-h-[60vh]">
            {orders.map((item) => (
              <OrderCard
                key={item._id}
                img={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                idDone={item.isDone}
                total={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
