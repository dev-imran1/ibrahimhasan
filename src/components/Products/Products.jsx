import React from "react";
import { FaStar } from "react-icons/fa6";

// Images
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";

// Product Data
const products = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

// Product Card Component (Reusable)
const ProductCard = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={item.aosDelay}
      className="space-y-3"
    >
      <img
        src={item.img}
        alt={item.title}
        className="h-[220px] w-[150px] object-cover rounded-md shadow-none"
      />

      <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.color}</p>

        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{item.rating}</span>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="mt-14 mb-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for You
          </p>

          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>

          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores modi.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="mt-10 bg-primary text-white py-1 px-5 rounded-md">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
