import React, { useState } from 'react'
import { motion } from 'motion/react'
import { TfiPlus } from "react-icons/tfi";
import { FaCartPlus } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import addCartLoader from '../assets/addCartLoader.gif';
import axios from 'axios'


const DishCard = ({image,title,description,price}) => {

  const {user,isAuthenticated}=useAuth0()
  const [spinner, setSpinner] = useState(false);

  const handleCart=async() => {
    if(!isAuthenticated) toast.error("Please login then try again !!!")
    setSpinner(true);
    try {
      const res=await axios.post('https://cafelin.onrender.com/api/cart/addToCart',{image,title,description,price,user:user.name,quantity:1})
      const data= await res.data;
      
      if(data.status===201){
        toast.success(data.message)
        setSpinner(false);
      }else{
        toast.error(data.message)
        setSpinner(false);
      }
    } catch (error) {
      toast.error(error)
    }
  }
  

  return (
    <div>
      <ToastContainer theme='dark' />
      <motion.div
    whileInView={{
        y:[50,-20,0],
        opacity:[0,0.5,1],
        transition:{duration:1}
    }}
    whileHover={{
      scale:1.1
    }}
    className='w-80 h-[450px] bg-[#f5f4f4] rounded-lg grid grid-cols-1 justify-center p-2 gap-3 drop-shadow-xl'>
        <div className='relative'>
          <img src={image} className='h-56  w-80 rounded-lg ' alt="" />
          <button 
          disabled={spinner}
          onClick={handleCart} title='click to add item in the cart' className='absolute p-2 rounded-full bg-white text-xl bottom-5 right-3'>
            {
              spinner ? (<img src={addCartLoader} alt="loading" className='h-8 w-8'/>) : <FaCartPlus />
            }
          </button>
        </div>
        <p className='font-bold text-2xl'>{title}</p>
        <p className='text-sm'>{description}</p>
        <p className='font-bold text-lg'>Price: {price} Rs</p>
    </motion.div>
    </div>
  )
}

export default DishCard