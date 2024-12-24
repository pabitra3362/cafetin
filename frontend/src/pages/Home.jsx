import React, { useEffect,useState } from "react";
import Hero from "../components/Hero";
import Menus from "../components/Menus";
import { motion } from "motion/react";
import footCoffee from '../assets/footer-coffee.avif'
import Loader from "../components/Loader";

const Home = () => {
  const [loader, setLoader] = useState(true)
  useEffect(()=>{
   const timer = setTimeout(()=>setLoader(false), 3000)
    return () => clearTimeout(timer) 
  })

  const bgimage = {
    backgroundImage: `url(${footCoffee})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70vh",
    width: "100vw",
  };

  return (
    <div>
      {loader && <Loader />}
      <div className="head">
        <Hero />
      </div>

      <div className="body">
        <Menus />
      </div>

      <div className="footer mt-6" style={bgimage}>
        <div className="w-full h-[70vh] md:w-[80vw] lg:w-[80vw] justify-center md:justify-start items-center mx-auto px-3">
          <div className="bg-transparent backdrop-blur-lg rounded-lg w-80 h-[60vh] p-2 grid justify-items-center gap-2 items-center border border-white shadow-current shadow-lg">
            <motion.div className="font-cursive text-7xl text-custom-brown fading">
              cafelin
            </motion.div>
            <div className="bg-white h-[1px] w-full"></div>
            <p className="text-white text-xl">
              At Cafelin, we believe that great coffee is about more than just a
              drink—it&apos;s about moments. From rich espressos to creamy
              lattes, our carefully sourced beans are roasted to perfection and
              brewed with passion. Whether you're starting your day or taking a
              break, every cup is an invitation to relax and savor the
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
