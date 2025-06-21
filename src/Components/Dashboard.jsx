import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/slice/slice";

const Dashboard = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleClicked = () => {
    dispatch(increment());
  };

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const filteredData = data
          .slice(1, 18)
          .filter(
            (_, index) => ![3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(index)
          );
        setFilteredProducts([...filteredData, ...filteredData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full">
        <h1 className="bg-black text-white text-2xl sm:text-[38px] font-bold text-center pt-4 pb-5 relative z-10">
          Products Dashboard
        </h1>

        {/* Gray Background Layer */}
        <div className="absolute inset-0 bg-gray-200 opacity-80 z-0"></div>

        {/* Main Content - Responsive grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-6 z-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="shadow-lg p-4 w-full sm:w-[380px] mx-auto sm:ml-5 mb-7 bg-white rounded-xl"
              >
                <img
                  src={product.image}
                  alt="Product"
                  className="w-32 h-32 sm:w-40 sm:h-40 mx-auto"
                />
                <h2 className="text-gray-700 text-base sm:text-[18px] font-semibold text-center pt-3 sm:pt-5 line-clamp-2">
                  {product.title}
                </h2>
                <h2 className="text-blue-800 text-center text-base sm:text-[17px] font-semibold pt-1 sm:pt-2">
                  ${product.price}
                </h2>
                <div className="flex justify-center">
                  <button
                    onClick={handleClicked}
                    className="mt-3 sm:mt-5 mb-3 sm:mb-5 border-2 border-blue-800 bg-blue-800 px-4 sm:px-5 py-1 sm:py-2 font-semibold text-white hover:bg-blue-950 hover:text-white hover:cursor-pointer hover:border-blue-950 rounded-[3px] text-sm sm:text-base"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
