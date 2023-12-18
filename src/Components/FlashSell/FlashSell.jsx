import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlashSell = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DataHost}/data`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-full bg-white myContainer my-4 md:py-4 py-2 px-1 rounded-md">
      <h1 className="text-center text-3xl font-bold text-primaryColor1 capitalize my-4">
        Flash sell
      </h1>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
        {/* Card */}
        {data.map((product) => (
          <Link to={`Chackout/${product._id}`}>
            <div
              className="cursor-pointer rounded-md p-3 shadow-md hover:-translate-y-2 transition-transform duration-300"
              key={product._id.$oid}
            >
              <img
                src={product.image[0]} // Assuming you want to display the first image
                alt="flash sell"
                className="w-[8rem] mx-auto mb-2 rounded-[2px]"
              />

              <div className="space-y-2">
                <h3 className="text-[12.2px] md:text-normal">
                  {product.ProductTitle}
                </h3>

                <h2 className="text-primaryColor1 text-[18px] md:text-xl font-semibold">
                  {product.DiscountPrice}{" "}
                </h2>
                <p className="text-lg">
                  <span className="line-through text-slate-400">
                    {product.Price}
                  </span>
                  <span className=""> -{product.DiscountPercent}%</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FlashSell;
