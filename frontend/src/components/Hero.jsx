import React from "react";
import coffee from "../assets/bg-coffee.jpg";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      animate={{
        opacity: [0, 0.5, 1],
        y: [-100, 0, 0],
        transition: { duration: 2 },
      }}
      className="w-80 md:w-[80vw] lg:w-[80vw] rounded-lg mx-auto my-5 relative"
    >
      <img
        className="rounded-lg brightness-75 lg:h-[50vh] w-full"
        src={coffee}
        alt="hero-coffee"
      />
      <motion.div
        animate={{
          opacity: [0, 0.5, 1],
          x: [50, 0],
          transition: { duration: 1, delay: 1 },
        }}
        className="absolute top-16 md:top-32 left-6 md:left-10 w-fit h-fit grid gap-5 lg:gap-8"
      >
        <p className="text-white text-xl font-bold md:text-2xl">
          Order Your Favourite Coffee Here
        </p>
        <p className="hidden md:block lg:block text-[#e4e3e3] w-[70%] lg:text-xl">
          Step into <strong className="text-custom-brown">Cafelin</strong> —
          where every sip feels like home. Enjoy expertly crafted coffee, a cozy
          atmosphere, and a warm welcome. Whether you&apos;re grabbing a quick
          pick-me-up or settling in for a peaceful moment, we&apos;ve got the
          perfect brew waiting for you.
        </p>
        <div>
          <button
            onClick={() => navigate("/menu")}
            className="px-3 py-2 text-sm lg:px-4 lg:py-2 rounded-full bg-white text-black hover:bg-custom-brown "
          >
            View Menu
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
