import React from "react";
// import image1 from "./image1.jpg";
import image1 from "./images/image1.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="flex justify-start h-[70vh] md:h-screen bg-cover bg-center bg-no-repeat pt-16 md:pt-[75px]"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "scroll", // Changed for mobile
      }}
    >
      <div className="mt-8 md:mt-[40px] mx-4 md:ml-[80px] max-w-full md:max-w-[700px] px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-white font-bold mt-8 md:mt-[50px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Raining Offers For <br className="hidden sm:block" />
          Hot Summer!
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#FFD700] font-bold mt-4 md:mt-[25px]">
          25% Off On All Products
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-[35px]">
          <Link to="/shopenow" className="w-full sm:w-auto">
            <button className="w-[150px] sm:w-auto border-2 border-white bg-white px-4 py-2 sm:px-5 sm:py-2 font-semibold text-gray-900 hover:bg-transparent hover:text-white hover:cursor-pointer rounded">
              Shop Now
            </button>
          </Link>
          <button className="w-[150px] sm:w-auto border-2 border-[#FFD700] bg-[#FFD700] px-4 py-2 sm:px-5 sm:py-2 font-semibold text-gray-900 hover:bg-black hover:text-white hover:border-black hover:cursor-pointer rounded">
            Explore Deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
