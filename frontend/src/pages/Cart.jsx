import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CartCard from "../components/CartCard";
import emptyCart from "../assets/emptyCart.png";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const { user, isAuthenticated } = useAuth0();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    return async () => {
      try {
        if (isAuthenticated) {
          const response = await axios.post("/api/cart/listCartItem", {
            user: user.email,
          });
          const data = await response.data;
          if (data.status === 201) {
            var carts = data.message;
            setCart(carts);
            var subtotal = 0;
            subtotal = carts.reduce((total, item) => {
              let tempPrice = Number(item.price);
              let tempQuantity = Number(item.quantity);
              return total + tempPrice * tempQuantity;
            }, 0);
            setTotal(subtotal);
          } else {
            setCart([]);
          }
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
  }, [CartCard]);
  return (
    <div className="w-full md:w-[80vw] lg:w-[80vw] mx-auto">
      {cart.length === 0 ? (
        <div className="h-screen flex justify-center items-center ">
          <div className="grid justify-items-center items-center gap-3">
            <div className="bg-transparent">
              <img className="" src={emptyCart} alt={emptyCart} />
            </div>
            <p className="text-black font-bold text-2xl">Your Cart Is Empty</p>
            <p className="text-center">
              Looks like you haven't made your choice yet. Browse our menu to
              find the perfect dish for you.
            </p>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="my-10 min-h-[60vh]">
          {cart.map((item) => (
            <CartCard
              key={item._id}
              id={item._id}
              title={item.title}
              price={item.price}
              img={item.image}
              quantity={item.quantity}
              cart={cart}
              setCart={setCart}
              total={total}
              setTotal={setTotal}
            />
          ))}
          </div>

          <div className="cart-total px-3 my-10">
            <div className="flex justify-between items-center">
              <div className="font-bold text-lg">Total:</div>
              <div className="font-bold text-lg">{total} Rs</div>
            </div>
            <div className="h-[1px] bg-custom-brown my-4"></div>
            <div className="flex justify-center items-center"><button onClick={()=>navigate('/payment')} className="bg-custom-brown text-white font-bold text-lg w-full lg:w-[40vw] p-2 rounded-xl">Make Payment</button></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
