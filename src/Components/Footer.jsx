import React from "react";
import imagegirl from "./images/girl.jpg";
const Footer = () => {
  return (
    <>
      <div className="border-30 border-gray-300 h-auto lg:h-[610px]">
        <div
          className="relative w-full h-full"
          style={{
            backgroundImage: `url(${imagegirl})`,
            height: "500px", // Mobile height
            minHeight: "550px", // Desktop height
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "65% center", // Adjusted to show more right side
            backgroundColor: "#f8f8f8", // Fallback color
          }}
        >
          <div className="absolute inset-0 bg-[#347fb1] opacity-20 z-0"></div>

          {/* Content container */}
          <div className="h-full w-full md:w-[620px] p-4 md:p-30 relative z-10 flex flex-col justify-center">
            <h1 className="tracking-wider text-[18px] md:text-[22px] text-white font-bold">
              Limited Time Offer
            </h1>
            <h1 className="tracking-wider text-3xl md:text-4xl text-white font-bold pt-4 md:pt-6">
              Special Edition
            </h1>
            <p className="tracking-wider w-full md:w-[500px] text-white font-semibold text-[14px] md:text-[16px] pt-4 md:pt-6">
              Experience exclusivity like never before – the Special Edition
              crafted just for those who demand the extraordinary!
            </p>
            <h1 className="tracking-wider w-full md:w-[500px] text-[16px] md:text-[19px] text-white font-bold pt-4 md:pt-6">
              Buy This T-shirt At 20% Discount, Use Code OFF20
            </h1>
            <button className="mt-6 md:mt-10 border-2 border-white bg-white px-6 md:px-8 py-2 md:py-3 font-semibold text-gray-900 hover:bg-transparent hover:text-white hover:cursor-pointer rounded-[3px]">
              Check Out
            </button>
          </div>
        </div>
      </div>

      {/* Complete Footer Section - Exactly as per original */}
      <footer className="bg-gray-200 text-gray-700 pt-10 md:pt-20 pb-10 md:pb-15">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
              <h2 className="font-bold text-lg mb-2">For Her</h2>
              <ul className="list-none">
                <li className="py-1">Women Jeans</li>
                <li className="py-1">Tops and Shirts</li>
                <li className="py-1">Women Jackets</li>
                <li className="py-1">Heels and Flats</li>
                <li className="py-1">Women Accessories</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
              <h2 className="font-bold text-lg mb-2">For Him</h2>
              <ul className="list-none">
                <li className="py-1">Men Jeans</li>
                <li className="py-1">Men Shirts</li>
                <li className="py-1">Men Shoes</li>
                <li className="py-1">Men Accessories</li>
                <li className="py-1">Men Jackets</li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="font-bold text-lg mb-2">Subscribe</h2>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-300">
            <p className="text-sm md:text-base text-gray-600">
              Copyright © 2025 FashionStore. Powered by FashionStore.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
