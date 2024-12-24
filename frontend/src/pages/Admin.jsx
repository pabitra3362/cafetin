import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import OrderCard from '../components/OrderCard';
import emptyOrder from '../assets/emptyOrder.mp4';

const Admin = () => {

    const [orders, setOrders] = useState([]);
    const [toogle, setToogle] = useState(false)

  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    return async () => {
      try {
        if(isAuthenticated){
          
          const userOrders = await axios.get(
            "https://cafelin.onrender.com/api/order/getOrders"
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
  }, [toogle]);

  return (
    <div>
      {orders.length === 0 ? (
        <div className="h-screen flex justify-center items-center ">
          <div className="grid justify-items-center items-center gap-3">
            <div className="bg-transparent">
              <video src={emptyOrder} loop autoPlay></video>
            </div>
            <p className="text-black font-bold text-2xl">Admin Order List Is Empty</p>
            <p className="text-center">
              Open After Some Time.
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
                isDone={item.isDone}
                admin={true}
                user={item.user}
                id={item._id}
                setToogle={setToogle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
