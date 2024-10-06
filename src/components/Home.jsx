import React, { useState } from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { WiDegrees } from "react-icons/wi";
import { BiColor } from "react-icons/bi";
import TechComp from "./TechComp";
import BrandComp from "./BrandComp";
import Features from "./Features";
import FeaturedLuxuryCat from "./FeaturedLuxuryCat";
import Footer from "./Footer";
import { IoIosMenu } from "react-icons/io";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full min-h-screen px-4 sm:px-10 md:px-20 py-5 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <header className="flex justify-between items-center gap-2 w-full h-[50px]">
        <div className="flex items-center">
          <img src="/assets/images/logo.png" alt="" className="h-8 sm:h-10" />
          <h1 className="text-lg sm:text-2xl ml-2">Elecar</h1>
        </div>
        <ul className="links hidden md:flex justify-between gap-4 sm:gap-8 text-sm sm:text-lg">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Popular</a>
          </li>
          <li>
            <a href="">Featured</a>
          </li>
        </ul>
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="bar md:hidden"
        >
          <IoIosMenu size={40} />
        </div>

        <div className={`mobMenu bg-red absolute bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white z-10 md:hidden top-16 left-0 w-full flex flex-col items-center gap-4 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition:"transform 0.3s ease,opacity 0.3s ease"}}>
            <a href="#home" className=" hover:text-black hover:bg-gray-500 py-1 px-10 rounded-md ">
              Home
            </a>
            <a href="#about" className=" hover:text-black hover:bg-gray-500 py-1 px-10 rounded-md">
              About
            </a>
            <a href="#services" className=" hover:text-black hover:bg-gray-500 py-1 px-10 rounded-md">
            Popular
            </a>
            <a href="#contact" className=" hover:text-black hover:bg-gray-500 py-1 px-10 rounded-md">
            Featured
            </a>
          </div>

      </header>

      <div className="banner w-full h-full flex flex-col items-center gap-4 mb-10 sm:mb-20">
        <h1 className="text-2xl sm:text-3xl font-bold capitalize mt-6 sm:mt-10">
          Choose the Best Car
        </h1>
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-lg sm:text-2xl font-bold">Porsche Mission E</h2>
          <h3 className="opacity-75 font-light flex items-baseline justify-center">
            <FaBoltLightning />
            Electric Car
          </h3>
        </div>
        <img
          src="/assets/images/hero.png"
          alt=""
          className="mt-6 w-3/4 sm:w-1/2"
        />
        <div className="cards flex flex-wrap justify-center gap-4 mt-6 sm:mt-10">
          {[
            { icon: <FaTemperatureHigh />, deg: 24, desc: "Temperature" },
            { icon: <FaTemperatureHigh />, deg: 873, desc: "Mileage" },
            { icon: <FaTemperatureHigh />, deg: 94, desc: "Battery" },
          ].map((item, index) => (
            <div
              key={index}
              className="card flex flex-col items-center gap-1 text-center"
            >
              {item.icon}
              <h1 className="text-xl sm:text-2xl">{item.deg}</h1>

              <h2 className="uppercase text-sm sm:text-base">{item.desc}</h2>
            </div>
          ))}
        </div>
        <div className="start uppercase p-2 rounded-full border-2 border-green-500 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mt-5">
          <div className="rounded-full border-2 p-2 sm:p-4 border-green-500 w-14 sm:w-20 h-14 sm:h-20 flex items-center justify-center">
            <h1 className="text-sm sm:text-base">start</h1>
          </div>
        </div>
      </div>

      <TechComp />
      <BrandComp />
      <Features />
      <FeaturedLuxuryCat />
      <Footer/>
      
    </div>
  );
};

export default Home;
