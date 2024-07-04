import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Product = () => {
  return (
    <div id="container">
      <Navbar />
      <Announcement />
      <div id="wrapper" className="p-12 flex">
        <div id="image-container" className="w-1/2">
          <img
            className="w-full h-[90vh] object-cover"
            src="public\ecoom\cat3.jpg"
          />
        </div>

        <div id="info-container" className="w-1/2 py-0 px-[50px]">
          <h1 className="font-extralight text-4xl">Denim Jumpsuit</h1>
          <p className="my-5 mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="font-extralight text-[40px]">$20</span>

          <div
            id="filter-container"
            className="my-[30px] mx-0 flex justify-between"
          >
            <div id="filter" className="flex items-center">
              <span id="filter-title" className="text-xl font-extralight">
                Color
              </span>
              <div className="w-5 h-5 rounded-full bg-red-400 my-0 mx-1 cursor-pointer"></div>
              <div className="w-5 h-5 rounded-full bg-zinc-800 my-0 mx-1 cursor-pointer"></div>
              <div className="w-5 h-5 rounded-full bg-blue-400 my-0 mx-1 cursor-pointer"></div>
            </div>
            <div id="filter" className="flex items-center">
              <span id="filter-title" className="text-xl font-extralight">
                Size
              </span>
              <select id="filter-size" className="ml-[10px] p-[5px]">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>

          <div
            id="add-container"
            className=" flex items-center justify-between"
          >
            <div id="amount-container" className="flex items-center font-bold">
              <Remove />
              <div
                id="amount"
                className="w-[30px] h-[30px]  border border-zinc-300 border-solid flex items-center justify-center my-0 mx-[5px]"
              >
                1
              </div>
              <Add />
            </div>
            <button className="p-[15px] border-2 border-solid border-teal-300 cursor-pointer font-medium hover:bg-[#f8f4f4]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
