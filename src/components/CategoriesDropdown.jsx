import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { tajmahal } from "../assets/images/images";

const categories = [
  {
    id: 1,
    text: "Jwellery",
    image: tajmahal,
  },
  {
    id: 2,
    text: "Accessories",
    image: "https://via.placeholder.com/300?text=Architectural+Marvels",
  },
  {
    id: 3,
    text: "Home Decor",
    image: "https://via.placeholder.com/300?text=UNESCO+World+Heritage+Sites",
  },
  {
    id: 4,
    text: "Apparels",
    image: "https://via.placeholder.com/300?text=UNESCO+World+Heritage+Sites",
  },
  {
    id: 5,
    text: "Art",
    image: "https://via.placeholder.com/300?text=UNESCO+World+Heritage+Sites",
  },
  {
    id: 6,
    text: "Apparels",
    image: "https://via.placeholder.com/300?text=UNESCO+World+Heritage+Sites",
  },
];

const CategoriesDropdown = ({ isOpen, setIsOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-pink-50 py-2 px-4 rounded-full text-gray-500 hover:text-black transition focus:outline-none w-50"
      >
        Categories
        {isOpen ? (
          <FiChevronUp className="ml-11 text-xl bg-white rounded-full" />
        ) : (
          <FiChevronDown className="ml-11 text-xl bg-white rounded-full" />
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 py-2 w-96 bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div className="w-1/2 border-r border-gray-300">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onMouseEnter={() => setHoveredItem(category.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="px-2 py-4 hover:bg-gray-100 cursor-pointer text-sm font-family: ui-sans-serif"
                >
                  {category.text}
                </div>
              ))}
            </div>
            <div className="w-1/2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`px-6 py-4 ${
                    hoveredItem === category.id ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.text}
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
