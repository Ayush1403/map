import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo } from "../assets/images/logo.svg";

const Header1 = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black transition lg:hidden">
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="flex-grow flex justify-center">
        <div className="text-5xl  logo-font Light mt-3">
          <img src={logo}></img>{" "}
        </div>
      </div>

      {/* Right section: About, FAQs, and Cart button */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-black transition">
          About
        </button>
        <button className="text-gray-600 hover:text-black transition">
          FAQs
        </button>
        <button className="text-gray-600 hover:text-black transition border-2	py-2 px-4 rounded-full		">
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
};

export default Header1;
