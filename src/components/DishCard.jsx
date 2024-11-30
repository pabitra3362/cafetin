import React from 'react'
import { motion } from 'motion/react'
import { TfiPlus } from "react-icons/tfi";

const DishCard = ({image,title,description,price}) => {
  return (
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
          <button title='click to add item in the cart' className='absolute p-2 rounded-full bg-white text-xl bottom-5 right-3'><TfiPlus /></button>
        </div>
        <p className='font-bold text-2xl'>{title}</p>
        <p className='text-sm'>{description}</p>
        <p className='font-bold text-lg'>Price: {price} Rs</p>
    </motion.div>
  )
}

export default DishCard