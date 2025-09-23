import React from "react";
import bgImage from "../assets/delux.jpg";

const Hero = () => {
  return (
    <div
      className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat mt-22"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
    <div className="absolute inset-0 bg-gray-900 opacity-30 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full  text-center text-white font-bold px-4">
        <h2 className="text-lg mb-4 tracking-widest uppercase">Where Lxury meets Dinner</h2>
        <h1 className="text-4xl font-extrabold mb-6">COMFLY <span className="text-lime-300">HOTELS</span></h1>
        <button className="bg-lime-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transition cursor-pointer">BOOK YOUR STAY</button>
      </div>
    </div>
  );
};

export default Hero;
