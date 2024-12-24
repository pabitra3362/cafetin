import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import CartCard from "../components/CartCard";
import emptyCart from "../assets/emptyCart.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import config from "../../config";
import { motion } from "framer-motion";

const Cart = () => {
  const { user, isAuthenticated } = useAuth0();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch cart items
  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        if (isAuthenticated) {
          const response = await axios.post("https://cafelin.up.railway.app/api/cart/listCartItem", {
            user: user.name,
          });
          const data = response.data;
          if (data.status === 201) {
            const carts = data.message;
            setCart(carts);

            const subtotal = carts.reduce((total, item) => {
              const tempPrice = Number(item.price);
              const tempQuantity = Number(item.quantity);
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
        console.error("Error fetching cart:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [isAuthenticated, user]);

  // Handle payment
  const handlePayment = async () => {
    try {
      const response = await axios.post("https://cafelin.up.railway.app/api/payment/order", {
        amount: total,
      });
      const data = response.data;
      handlePaymentVerify(data);
    } catch (error) {
      toast.error("Something went wrong! Please try again later.");
    }
  };

  // Handle payment verification
  const handlePaymentVerify = async (data) => {
    const options = {
      key: config.razorpay_key,
      amount: data.amount,
      currency: data.currency,
      name: "Cafelin",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        try {
          const res = await axios.post("https://cafelin.up.railway.app/api/payment/verify", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            amount: data.amount / 100,
          });

          const verifyData = res.data;

          if (verifyData.message) {
            toast.success(verifyData.message);

            // Clear the cart after successful payment
            await axios.delete("https://cafelin.up.railway.app/api/cart/deleteAllCart", {
              data: { user: user.name },
            });

            setCart([]);
            setTotal(0);

            // Optionally, refresh the cart state
            const newCartResponse = await axios.post("https://cafelin.up.railway.app/api/cart/listCartItem", {
              user: user.name,
            });
            const newCartData = newCartResponse.data;

            if (newCartData.status === 201) {
              setCart(newCartData.message);
            }

            navigate("/orders");
          }
        } catch (error) {
          console.error("Error during payment verification:", error.message);
        }
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  if (loading) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>;
  }

  return (
    <div className="w-full md:w-[80vw] lg:w-[80vw] mx-auto">
      <ToastContainer theme="dark" />
      {cart.length === 0 ? (
        <div className="h-screen flex justify-center items-center">
          <div className="grid justify-items-center items-center gap-3">
            <div className="bg-transparent">
              <img src={emptyCart} alt="Empty Cart" />
            </div>
            <p className="text-black font-bold text-2xl">Your Cart Is Empty</p>
            <p className="text-center">
              Looks like you haven't made your choice yet. Browse our menu to find the perfect dish for you.
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
            Cart
          </motion.h2>
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
            <div className="flex justify-center items-center">
              <button
                onClick={handlePayment}
                className="bg-custom-brown text-white font-bold text-lg w-full lg:w-[40vw] p-2 rounded-xl"
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
