import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Navbar - fixed position solution */}
      <nav className="h-[75px] bg-[#257196] flex justify-around items-center fixed top-0 left-0 right-0 z-50 brightness-95">
        {/* Logo - unchanged */}
        <h1 className="text-[25px] font-bold text-white font-stretch-50% italic">
          FashionStore
        </h1>

        {/* Mobile Menu Button - unchanged */}
        <div className="md:hidden flex items-center">
          <Link to="/card" className="flex items-center mr-4">
            <BsCartCheck className="cursor-pointer text-white" size={34} />
            <span className="pl-2 text-[20px] text-white">{count}</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation - COMPLETELY UNCHANGED except active route underline */}
        <ul className="hidden md:flex space-x-10 text-[15px] text-white font-semibold items-center">
          <li>
            <div className="relative group w-max">
              <NavLink to="/home" className="relative w-max text-white">
                HOME
              </NavLink>
              <div
                className={`absolute inset-0 h-[3px] w-full bg-gradient-to-r from-green-500 to-yellow-500 left-0 bottom-0 top-6 rounded-[3px] shadow-[0px_0px_6px_2px_rgba(34,197,94,0.6)] transition-opacity duration-300 ${
                  location.pathname === "/home"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>
          </li>
          <li>
            <div className="relative group w-max">
              <NavLink to="/dashboard" className="relative w-max text-white">
                PRODUCTS
              </NavLink>
              <div
                className={`absolute inset-0 h-[3px] w-full bg-gradient-to-r from-green-500 to-yellow-500 left-0 bottom-0 top-6 rounded-[3px] shadow-[0px_0px_6px_2px_rgba(34,197,94,0.6)] transition-opacity duration-300 ${
                  location.pathname === "/dashboard"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>
          </li>
          <li>
            <div className="relative group w-max">
              <NavLink to="/aboutus" className="relative w-max text-white">
                ABOUT US
              </NavLink>
              <div
                className={`absolute inset-0 h-[3px] w-full bg-gradient-to-r from-green-500 to-yellow-500 left-0 bottom-0 top-6 rounded-[3px] shadow-[0px_0px_6px_2px_rgba(34,197,94,0.6)] transition-opacity duration-300 ${
                  location.pathname === "/aboutus"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>
          </li>
          <li>
            <div className="relative group w-max">
              <NavLink to="/contact" className="relative w-max text-white">
                CONTACT US
              </NavLink>
              <div
                className={`absolute inset-0 h-[3px] w-full bg-gradient-to-r from-green-500 to-yellow-500 left-0 bottom-0 top-6 rounded-[3px] shadow-[0px_0px_6px_2px_rgba(34,197,94,0.6)] transition-opacity duration-300 ${
                  location.pathname === "/contact"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>
          </li>
          <li>
            <Link
              to="/card"
              className="flex items-center hover:text-yellow-400 ml-4"
            >
              <BsCartCheck className="cursor-pointer" size={34} />
              <span className="pl-2 text-[20px] text-white">{count}</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu - UPDATED to show active route in yellow */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-[75px] left-0 right-0 bg-[#257196] z-40 py-4 px-4">
            <div className="flex flex-col space-y-6 text-white font-semibold">
              <NavLink
                to="/home"
                className={`py-2 ${
                  location.pathname === "/home" ? "text-yellow-400" : ""
                }`}
                onClick={toggleMenu}
              >
                HOME
              </NavLink>
              <NavLink
                to="/dashboard"
                className={`py-2 ${
                  location.pathname === "/dashboard" ? "text-yellow-400" : ""
                }`}
                onClick={toggleMenu}
              >
                PRODUCTS
              </NavLink>
              <NavLink
                to="/aboutus"
                className={`py-2 ${
                  location.pathname === "/aboutus" ? "text-yellow-400" : ""
                }`}
                onClick={toggleMenu}
              >
                ABOUT US
              </NavLink>
              <NavLink
                to="/contact"
                className={`py-2 ${
                  location.pathname === "/contact" ? "text-yellow-400" : ""
                }`}
                onClick={toggleMenu}
              >
                CONTACT US
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer div - prevents content from being hidden under fixed navbar */}
      <div className="h-[75px]"></div>

      {/* Global styles - unchanged */}
      <style jsx global>{`
        html,
        body {
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

export default Header;
