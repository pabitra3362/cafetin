import React, { useState } from "react";
import {
  asset,
  categories,
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
import DishCard from "./DishCard";

const Menus = () => {
  const [category, setCategory] = useState("");

  const categoryMap = {
    categories,
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

  const handleCategory = (item) => {
    setCategory((prev) => {
      if (prev === item.title) {
        return "";
      } else {
        return item.title;
      }
    });
  };

  return (
    <div className="w-80 md:w-[80vw] mx-auto">
      <h2 className="font-bold text-lg my-3">Explore Our Menu</h2>
      <p className="font-serif">
        Welcome to our Coffee Menu, where every cup tells a story of flavor and
        craftsmanship. Whether you&apos;re a fan of rich, bold espressos, smooth
        lattes, or indulgent iced brews, we have something to satisfy every
        craving. Our beans are carefully sourced from the finest coffee-growing
        regions, roasted to perfection, and brewed with passion. Explore our
        diverse selection of handcrafted beverages, each made to elevate your
        coffee experience and fuel your day with warmth and inspiration.
        Whatever your preference, your perfect cup awaits!
      </p>
      {/* category */}
      <div className="flex overflow-x-scroll justify-center space-x-4">
        <div className="flex overflow-x-auto space-x-4 py-4">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategory(item)}
              className=" grid items-center justify-center gap-3"
            >
              <div
                className={`flex-none h-44 w-44 ${
                  category === item.title ? "border-4 border-black" : ""
                } rounded-full`}
              >
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={`..${item.src}`}
                  alt={item}
                />
              </div>
              <div className="text-center">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="font-bold text-lg my-3 px-3">Top Dishes For You</p>
      {/* dishes */}
      <div className="grid w-full md:w-[80vw] lg:w-[80vw]  mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-y-10 my-5">
        {category === "" &&
          asset.map((item, index) => (
            <DishCard
              key={index}
              image={item.src}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}

        {categoryMap[category] &&
          categoryMap[category].map((item, index) => (
            <DishCard
              key={index}
              image={item.src}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Menus;
