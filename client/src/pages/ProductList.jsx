import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div id="container">
      <Navbar />
      <Announcement />
      <h1 className="m-5 font-semibold text-3xl">Dresses</h1>
      <div className="flex justify-between">
        <div id="filter" className="m-5">
          <span className="text-xl font-semibold mr-5">Filter Products:</span>
          <select className="p-2 mr-5">
            <option selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Blue</option>
            <option>Red</option>
            <option>Green</option>
            <option>Yellow</option>
          </select>
          <select className="p-2 mr-5">
            <option selected disabled>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="m-5">
          <span>Sort Products:</span>
          <select className="p-2 mr-5">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
