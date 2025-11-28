import React from "react";
import Img1 from "../../assets/shirt/caplino.jpg";
import Img2 from "../../assets/shirt/gentleair.jpg";
import Img3 from "../../assets/shirt/vccaplino.jpg";
import Img4 from "../../assets/shirt/zmbodyspary.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Caplino Face wash",
    description:
      "Caplino Brightening Turmeric Facial Cleanser 100ml Brighten the skin: it can help brighten the skin, make the skin glow, and even the skin tone.Reduce pores: tighten skin and shrink pores to make the appearance more youthful.Treat acne: help treat and prevent acne. It also contains skin-soothing ingredients that can help heal the skin and reduce acne scars.",
  },
  {
    id: 2,
    img: Img2,
    title: "Air Freshner",
    description:"Best Air Fresher in Bangladesh",
  },
  {
    id: 3,
    img: Img3,
    title: "Capilino Serum",
    description:"Best Serum",
  }, 
    {
    id: 4,
    img: Img4,
    title: "Body Spray",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
