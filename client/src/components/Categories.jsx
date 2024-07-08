import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/data";

const CategoryItem = ({ img, title, link }) => {
  return (
    <div className="relative overflow-hidden group rounded-lg shadow-md m-2 flex-grow">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col transition-opacity duration-300 group-hover:bg-opacity-60">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center px-4">{title}</h2>
        <Link
          to={`/products/${title}`}
          className="bg-white text-gray-800 py-2 px-6 rounded-full font-semibold transition-colors duration-300 hover:bg-indigo-600 hover:text-white"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Categories</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap -mx-2">
          {categories.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <CategoryItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;