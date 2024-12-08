import React from 'react'
import { motion } from 'motion/react'
import { TfiPlus } from "react-icons/tfi";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'


const DishCard = ({image,title,description,price}) => {

  const {user,isAuthenticated}=useAuth0()

  const handleCart=async() => {
    if(!isAuthenticated) toast.error("Please log in first.")
    try {
      const res=await axios.post('/api/cart/addToCart',{image,title,description,price,user:user.email,quantity:1})
      const data= await res.data;
      
      if(data.status===201){
        toast.success(data.message)
      }else{
        toast.error(data.message)
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
          <button onClick={handleCart} title='click to add item in the cart' className='absolute p-2 rounded-full bg-white text-xl bottom-5 right-3'><TfiPlus /></button>
        </div>
        <p className='font-bold text-2xl'>{title}</p>
        <p className='text-sm'>{description}</p>
        <p className='font-bold text-lg'>Price: {price} Rs</p>
    </motion.div>
    </div>
  )
}

export default DishCard