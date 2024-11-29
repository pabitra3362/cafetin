import React from 'react'
import coffee from '../assets/bg-coffee.jpg'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <motion.div 
    whileInView={{
      opacity:[0,0.5,1],
      transition:{duration:4}
    }}
    className='w-80 md:w-[80vw] lg:w-[80vw] rounded-lg mx-auto my-5 relative'>
      <img className='rounded-lg brightness-75 lg:h-[50vh] w-full' src={coffee} alt="hero-coffee" />
      <div className='absolute top-16 md:top-32 left-6 md:left-10 w-fit h-fit grid gap-5 lg:gap-8'>
        <p className='text-white text-xl font-bold md:text-2xl'>Order Your Favourite Coffee Here</p>
        <p className='hidden md:block lg:block text-[#e4e3e3] w-[90%]'>Brewed for You, Perfected by Us <br />
          Step into <strong>Cafelin</strong> — where every sip feels like home. Enjoy expertly crafted coffee, a cozy atmosphere, and a warm welcome. Whether you&apos;re grabbing a quick pick-me-up or settling in for a peaceful moment, we&apos;ve got the perfect brew waiting for you.
          </p>
        <div><button className='px-4 py-2 rounded-full bg-white text-black btn hover:bg-custom-brown '>View Menu</button></div>
      </div>
    </motion.div>
  )
}

export default Hero
