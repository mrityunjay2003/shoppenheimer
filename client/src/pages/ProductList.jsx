import { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div id="container" className="bg-gray-100 min-h-screen">
      <Navbar />
      <Announcement />
      <h1 className="m-5 font-semibold text-3xl text-gray-800">
        {cat?.toUpperCase()}
      </h1>
      <div className="flex justify-between items-center m-5 p-5 bg-white shadow-md rounded-lg">
        <div id="filter" className="flex items-center space-x-5">
          <span className="text-xl font-semibold text-gray-800">
            Filter Products:
          </span>
          <select
            name="color"
            className="p-2 border border-gray-300 rounded-md"
            onChange={handleFilters}
          >
            <option disabled>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Blue</option>
            <option>Red</option>
            <option>Green</option>
            <option>Yellow</option>
          </select>

          <select
            className="p-2 border border-gray-300 rounded-md"
            name="size"
            onChange={handleFilters}
          >
            <option value="">Select Size</option>
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-5">
          <span className="text-xl font-semibold text-gray-800">
            Sort Products:
          </span>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
