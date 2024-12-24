import React from "react";
import cafelinOutside from "../assets/cafelinOutside.jpg";
import cafelinInside from "../assets/cafelinInside.jpg";
import cafelinOwner from "../assets/cafelinOwner.jpg";
import { motion } from 'framer-motion'
import Loader from "../components/Loader";

const About = () => {
  const bgimage = {
    backgroundImage: `url(${cafelinOutside})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "40vh",
    width: "100vw",
    filter: "brightness(65%)",
  };

  return (
    <div className="min-h-screen">
      <div style={bgimage} className="flex justify-center items-center">
        <h1 className="text-white font-bold text-4xl md:text-[4rem] tracking-[0.25rem]">
          About Cafelin
        </h1>
      </div>

      {/* first phase */}
      <div className="first-phase w-full md:w-[90vw] lg:w-[80vw] mx-auto grid md:flex justify-items-center md:justify-between items-center px-3 gap-8 md:gap-2 lg:gap-10 my-12 lg:py-20 py-5 ">
        <div className="text grid justify-items-start items-center gap-5">
          <p className="text-2xl text-black font-semibold font-serif w-80 md:w-[35vw] lg:w-[30vw]">
            Where passion meets perfection, one cup at a time
          </p>
          <div className="bg-custom-brown h-[3px] w-44"></div>
          <div className="w-full md:w-[35vw] lg:w-[30vw] lg:text-lg">
            <p className="my-2">
              We start with the finest beans, carefully sourced from sustainable
              farms around the world, and roast them to perfection. Every cup we
              brew is a celebration of flavor, crafted with care to deliver a
              rich and satisfying experience. Our goal is simple: to make every
              sip a moment to savor.
            </p>
            <p className="my-2">
              Coffee is more than just a drink—it&apos;s a connection. It&apos;s
              the shared experience, the warmth, and the inspiration that comes
              with each cup. With every brew, we bring passion and perfection
              together, ensuring that your coffee moment is always something
              special.
            </p>
          </div>
        </div>

        <motion.div
        whileInView={{
          opacity:[0,1],
          x:[100,0],
          transition:{
            type:"spring"
          }
        }}
        className="image">
          <img className="w-80 md:w-96 lg:w-[40vw] md:h-[45vh] lg:h-[50vh] rounded-lg" src={cafelinInside} alt="Cafelin Inside" />
        </motion.div>
      </div>

      {/* second phase */}
      <div className="bg-[#f3eeee]">
      <div className="second-phase w-full md:w-[90vw] lg:w-[80vw] mx-auto bg-[#f3eeee] flex flex-col-reverse md:flex-row justify-between items-center px-3 gap-8 md:gap-5 lg:gap-10 my-12 lg:py-20 py-5">
      <motion.div 
      whileInView={{
        opacity:[0,1],
        x:[-100,0],
        transition:{
          type:"spring"
        }
      }}
      className="image">
          <img className="w-80 md:w-96 lg:w-[40vw] md:h-[45vh] lg:h-[45vh] rounded-lg" src={cafelinOwner} alt="Cafelin Owner" />
        </motion.div>

        <div className="text grid justify-items-start items-center gap-5">
          <p className="text-2xl text-black font-semibold font-serif w-80 md:w-[30vw] lg:w-[40vw]">
          Where passion and craftsmanship come together, creating moments that matter
          </p>
          <div className="bg-custom-brown h-[3px] w-44"></div>
          <div className="w-full md:w-[30vw] lg:w-[40vw] lg:text-lg">
            <p className="my-2">
            Driven by a love for coffee, our owner pours dedication into every cup. From sourcing the best beans to perfecting each roast, every detail reflects a commitment to quality and the art of brewing. It&apos;s not just about the coffee; it&apos;s about the care and passion that go into every step.
            </p>
            <p className="my-2">
            For us, coffee is an experience that brings people together. Whether you&apos;re enjoying a quiet break or connecting with friends, we&apos;re here to make every moment special, one cup at a time.
            </p>
          </div>
        </div>        
      </div>
      </div>

      {/* third phase */}
      <div className="third-phase w-full md:w-[90vw] lg:w-[80vw] mx-auto grid md:flex justify-items-center md:justify-between items-center px-3 gap-8 md:gap-2 lg:gap-10 my-12 lg:py-20 py-5">
        <div className="text grid justify-items-start items-center gap-5">
          <p className="text-2xl text-black font-semibold font-serif w-80 md:w-[35vw] lg:w-[30vw]">
          Come in, relax, and savor the moments
          </p>
          <div className="bg-custom-brown h-[3px] w-44"></div>
          <div className="w-full md:w-[35vw] lg:w-[30vw] lg:text-lg">
            <p className="my-2">
            Our café is all about creating a space where you can slow down and enjoy the simple pleasures of life. With every cup, we aim to offer not just great coffee but a moment to unwind and connect. Whether you&apos;re taking a break or catching up with friends, we&apos;ve crafted an atmosphere where you can truly relax.
            </p>
            <p className="my-2">
            Take a seat, enjoy your favorite brew, and let us make your day a little brighter, one sip at a time.
            </p>
          </div>
        </div>

        <motion.div 
        whileInView={{
          opacity:[0,1],
          x:[100,0],
          transition:{
            type:"spring"
          }
        }}
        className="image">
          <img className="w-80 md:w-96 lg:w-[40vw] md:h-[45vh] lg:h-[45vh] rounded-lg" src={cafelinOutside} alt="Cafelin Outside" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
