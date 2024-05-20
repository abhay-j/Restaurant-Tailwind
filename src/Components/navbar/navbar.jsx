import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import hamburger menu icon from react-icons/fa
import { FaTimes } from "react-icons/fa";
const navItems = [
  { label: "Home", active: true, linkTo: "/" },
  { label: "About", active: false, linkTo: "/about" },
  { label: "Menu", active: false, linkTo: "/menu" },
  
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white flex justify-between items-center px-4 md:px-8 py-4 font-semibold text-base sticky top-0 z-50">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2d48a6f0387c677587a538ac6c939585d3bc4091e47d94d4595bf216f39f96b?apiKey=a3c25f6e54a54eb681ff737ee21ae812&"
            alt="Company Logo"
          />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav>
            <ul className="flex flex-col items-center space-y-4 ">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.linkTo}
                    className={`${
                      item.active ? "text-red-500" : "text-black"
                    } hover:text-red-500`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/login"
                  className="text-black px-6 py-3 hover:bg-red-500 hover:text-white transition-colors duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-black px-6 py-3  hover:bg-red-600 transition-colors duration-300"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {/* Hamburger menu button for mobile */}

      {isOpen ? (
        <button
          onClick={toggleMenu}
          className="block md:hidden text-[30px] focus:outline-none"
        >
          <FaTimes />
        </button>
      ) : (
        <button
          onClick={toggleMenu}
          className="block md:hidden text-xl focus:outline-none"
        >
          <FaBars />
        </button>
      )}

      {/* Desktop menu */}
      <nav className="hidden md:flex items-center space-x-4">
        <ul className="flex items-center space-x-4 ">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.linkTo}
                className={`${
                  item.active ? "text-red-500" : "text-black"
                } hover:text-red-500`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-black border border-red-500 px-6 py-3  hover:bg-red-500 hover:text-white transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-red-500 text-white px-6 py-3 hover:bg-red-600 transition-colors duration-300"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
