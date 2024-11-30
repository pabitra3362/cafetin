import React from 'react'
import Hero from '../components/Hero'
import Menus from '../components/Menus'
import { asset } from '../assets/asset'
import { motion } from 'motion/react'

const Home = () => {

  const bgimage={
    backgroundImage: `url(${asset.footCoffee})`,
    backgroundSize: 'cover',
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'center',
    height: '60vh',
    width:'100vw'
  }
  
  return (
    <div>

      <div className="head">
      <Hero />
      </div>


      <div className="body">
        <Menus />
      </div>


      <div className='footer mt-6 flex justify-center md:justify-start md:pl-24 lg:pl-36 items-center' style={bgimage}>
       <div className='bg-transparent backdrop-blur-lg rounded-lg w-80 h-[50vh] p-2 grid justify-items-center gap-2 items-center border border-white shadow-current shadow-lg'>
        <motion.div 
        
        className='font-cursive text-7xl text-custom-brown fading'>cafelin</motion.div>
        <div className='bg-white h-[1px] w-full'></div>
          <p className='text-white text-xl'>At Cafelin, we believe that great coffee is about more than just a drink—it&apos;s about moments. From rich espressos to creamy lattes, our carefully sourced beans are roasted to perfection and brewed with passion. Whether you're starting your day or taking a break, every cup is an invitation to relax and savor the experience.</p>
       </div>
      </div>

    </div>
  )
}

export default Home
