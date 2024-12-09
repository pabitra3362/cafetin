import React, { forwardRef } from 'react'
import { motion } from 'motion/react'

const Textarea = forwardRef(function Textarea({
    label,
    placeholder = "",
    className = "",
    name,
    ...props
}, ref) {
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


            <textarea
                name={name}
                placeholder={placeholder}
                className={`h-24 p-2 bg-white text-black font-bold text-lg ${className} border border-custom-brown focus:shadow-cyan focus:outline-none my-2`}
                {...props}
                ref={ref}
            ></textarea>
        </motion.div>
    )
})

export default Textarea