import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "../features/slice/slice";
import { Link } from "react-router-dom";

const Card = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const deleteCart = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4 sm:p-5">
        <div className="bg-white h-auto sm:h-[355px] w-full max-w-md sm:w-auto px-4 sm:px-25 py-8 sm:p-10 rounded-xl shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#257196] mb-4 sm:mb-6 text-center">
            Your Shopping Cart
          </h1>

          {count > 0 ? (
            <>
              <div className="bg-gray-100 p-4 sm:p-5 rounded-lg border-1 border-gray-300 shadow-lg">
                <p className="text-base sm:text-lg font-semibold text-center">
                  Total Items in Cart: {count}
                </p>
              </div>
              <div className="pt-1 pb-6 sm:pb-8 text-center">
                <button
                  onClick={deleteCart}
                  className="border-2 border-red-500 px-6 sm:px-9 py-2 bg-red-500 hover:bg-red-700 hover:border-red-700 text-white font-semibold rounded-[5px] mt-4 sm:mt-6 cursor-pointer mx-auto"
                >
                  Delete items
                </button>
              </div>
            </>
          ) : (
            <p className="text-base sm:text-lg text-gray-600 pt-6 sm:pt-10 pb-8 sm:pb-12 text-center">
              Your cart is empty.
            </p>
          )}

          <div className="text-center">
            <Link
              to="/dashboard"
              className="mt-4 sm:mt-6 bg-[#257196] text-white px-3 sm:px-4 py-2 sm:py-3 rounded hover:bg-[#1d5b7d] font-semibold text-sm sm:text-base"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
