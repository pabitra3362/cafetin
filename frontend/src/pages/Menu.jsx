import React, { useState } from "react";
import { motion } from "framer-motion";
import DishCard from "../components/DishCard";

import {
  All,
  Coffee,
  Tea,
  Fries,
  Momos,
  Frankies,
  Sandwich,
  Pizza,
  Burger,
  Rolls,
  Maggies,
  Drinks,
} from "../assets/asset";

const Menu = () => {
  const [selected, setSelected] = useState("All");

  const categoryMap = {
    All,
    Coffee,
    Tea,
    Fries,
    Momos,
    Frankies,
    Sandwich,
    Pizza,
    Burger,
    Rolls,
    Maggies,
    Drinks,
  };

  const arr = [
    "All",
    "Coffee",
    "Tea",
    "Drinks",
    "Momos",
    "Frankies",
    "Pizza",
    "Burger",
    "Rolls",
    "Maggies",
    "Fries",
  ];
  return (
    <div className="min-h-screen w-full md:w-[80vw] lg:w-[80vw] px-3 mx-auto">
      <div className="flex justify-between items-center">
        <motion.p
          animate={{
            x: [-100, 0],
            transition: {
              duration: 1,
            },
          }}
          className="text-black font-bold text-center text-xl lg:text-2xl my-5"
        >
          Menu
        </motion.p>
        <motion.select
          animate={{
            x: [100, 0],
            transition: {
              duration: 1,
            },
          }}
          className="font-bold border-2 border-black rounded-lg"
        >
          {arr.map((item, index) => (
            <motion.option
              animate={{
                opacity: [0, , 0.5, 1],
                transition: {
                  duration: 1,
                  delay: index * 1,
                },
              }}
              key={index}
              className="rounded-lg hover:text-custom-brown"
              onClick={() => setSelected(item)}
              value={item}
            >
              {item}
            </motion.option>
          ))}
        </motion.select>
      </div>
      <motion.p
        whileInView={{
          opacity: [0, 1],
          transition: {
            duration: 1,
          },
        }}
        className="text-custom-brown text-center text-4xl my-8 lg:my-28 underline font-bold"
      >
        {selected}
      </motion.p>

      {/* dishes */}
      <div className="grid w-full md:w-[80vw] lg:w-[80vw]  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-y-10 my-5 lg:my-12">
        {categoryMap[selected] && categoryMap[selected].length > 0 ? (
          categoryMap[selected].map((item, index) => (
            <DishCard
              key={`${selected}-${index}`} // Unique key based on selected category and index
              image={item.src}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))
        ) : (
          <p>No dishes available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
