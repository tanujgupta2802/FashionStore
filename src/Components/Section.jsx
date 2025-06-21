import React from "react";
import image3 from "./images/image3.jpg";
import imagemen from "./images/men-img.jpg";
import imagefootwear from "./images/footwear-img.jpg";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <>
      <div className="">
        <h1 className="font-bold ml-4 sm:ml-8 text-2xl sm:text-[42px] text-gray-800 pt-8 sm:pt-15">
          DISCOVER LATEST FASHION!
        </h1>

        <div className="flex flex-col sm:flex-row h-auto sm:h-[550px] justify-center items-center gap-4 sm:gap-[25px] p-4 sm:p-0">
          {/* First Card */}
          <div
            className="relative w-full sm:w-[380px] h-[300px] sm:h-[430px]"
            style={{
              backgroundImage: `url(${image3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-[#25252580] z-0"></div>
            <div className="w-full sm:w-[370px] h-auto sm:h-[200px] mt-[150px] sm:mt-[220px] p-4 sm:p-0">
              <h1 className="ml-2 sm:ml-8 text-xl sm:text-2xl text-white font-bold relative z-10">
                20% Off On Tank Tops
              </h1>
              <p className="text-white font-semibold ml-2 sm:ml-8 mt-2 sm:mt-4 relative z-10 text-sm sm:text-[17px]">
                Soft, breezy, and perfect for summer. Grab yours before the sale
                ends!
              </p>
              <Link to="/shopenow">
                <button className="mt-3 sm:mt-5 ml-2 sm:ml-8 border-2 border-white relative z-10 bg-white px-3 sm:px-5 py-1 sm:py-2 font-semibold text-gray-800 hover:bg-transparent hover:text-white hover:cursor-pointer rounded-[3px] text-sm sm:text-base">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Second Card */}
          <div
            className="relative w-full sm:w-[380px] h-[300px] sm:h-[430px]"
            style={{
              backgroundImage: `url(${imagemen})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-[#25252580] z-0"></div>
            <div className="w-full sm:w-[370px] h-auto sm:h-[200px] mt-[150px] sm:mt-[220px] p-4 sm:p-0">
              <h1 className="ml-2 sm:ml-8 text-xl sm:text-2xl text-white font-bold relative z-10">
                Latest Eyewear For You
              </h1>
              <p className="text-white font-semibold ml-2 sm:ml-8 mt-2 sm:mt-4 relative z-10 text-sm sm:text-[17px]">
                Fresh frames for fresh looks. Find your signature style today.
              </p>
              <Link to="/shopenow">
                <button className="mt-3 sm:mt-5 ml-2 sm:ml-8 border-2 border-white relative z-10 bg-white px-3 sm:px-5 py-1 sm:py-2 font-semibold text-gray-800 hover:bg-transparent hover:text-white hover:cursor-pointer rounded-[3px] text-sm sm:text-base">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Third Card */}
          <div
            className="relative w-full sm:w-[380px] h-[300px] sm:h-[430px]"
            style={{
              backgroundImage: `url(${imagefootwear})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-[#25252580] z-0"></div>
            <div className="w-full sm:w-[370px] h-auto sm:h-[200px] mt-[150px] sm:mt-[220px] p-4 sm:p-0">
              <h1 className="ml-2 sm:ml-8 text-xl sm:text-2xl text-white font-bold relative z-10">
                Let's Suit Up!
              </h1>
              <p className="text-white font-semibold ml-2 sm:ml-8 mt-2 sm:mt-4 relative z-10 text-sm sm:text-[17px]">
                Sharp suits for sharper you. Nail that confident look
                effortlessly.
              </p>
              <Link to="/shopenow">
                <button className="mt-3 sm:mt-5 ml-2 sm:ml-8 border-2 border-white relative z-10 bg-white px-3 sm:px-5 py-1 sm:py-2 font-semibold text-gray-800 hover:bg-transparent hover:text-white hover:cursor-pointer rounded-[3px] text-sm sm:text-base">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
