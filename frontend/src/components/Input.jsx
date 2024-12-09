import React, { forwardRef } from 'react'
import {motion} from "motion/react"

const MyInput = forwardRef( function MyInput(
    {
        label,
        type="text",
        placeholder="",
        className="",
        name,
        ...props
    },
    ref){
    return (
        <motion.div
        whileInView={{
            translateY:[100,-20,0],
            opacity:[0,1],
            transition:{duration:1}
          }}
        >


          {label && <label htmlFor={name} className='mx-2'>
            {label}
            </label>
            }


            <input
            type={type} 
            placeholder={placeholder} 
            name={name} 
            className={`h-12 p-2 bg-white text-black font-bold text-lg ${className} border border-custom-brown focus:shadow-cyan focus:outline-none my-2`} 
            ref={ref}
            {...props} 
            />


        </motion.div>
      )
})


export default MyInput