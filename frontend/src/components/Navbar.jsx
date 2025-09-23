import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed left-0 z-50 w-full top-0">
      <nav className=" flex items-center flex-col space-y-6 py-[1rem] px-[2rem] md:justify-between md:flex-row bg-orange-900 text-white">
        <Link to="/">
          <div>
            <h2 className="font-bold text-sm md:text-2xl  ">
              COMFY<span className="text-lime-400">HOTELS</span>
            </h2>
          </div>
        </Link>

        <div>
          <ul className=" md:flex space-y-2 md:gap-8">
            <li className="font-bold text-xs md:text-lg cursor-pointer hover:text-lime-500 hover:underline "> BOOKINGS</li>
            <li className="font-bold text-xs md:text-lg cursor-pointer hover:text-lime-500 hover:underline">ROOMS</li>
            <li className="font-bold text-xs md:text-lg cursor-pointer hover:text-lime-500 hover:underline">CONTACT</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
