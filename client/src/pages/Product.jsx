import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";

const FilterColor = ({ color, selectedColor, onClick }) => {
  return (
    <div
      className={`w-6 h-6 rounded-full cursor-pointer border-2 ${selectedColor === color ? 'border-indigo-600' : 'border-transparent'}`}
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    ></div>
  )
}

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Announcement />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4 mb-8 md:mb-0">
            <div className="h-[400px] md:h-[600px] rounded-lg bg-gray-100 mb-4">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={product.img}
                alt={product.title}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Price:</span>
                <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Color:</span>
              <div className="flex items-center mt-2 space-x-3">
                {product.color?.map((c) => (
                  <FilterColor color={c} key={c} selectedColor={color} onClick={setColor} />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">Size:</span>
              <select
                className="block w-full mt-2 bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="">Select Size</option>
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center mb-4">
              <span className="font-bold text-gray-700 mr-4">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  className="px-2 py-1"
                  onClick={() => handleQuantity("dec")}
                >
                  <Remove />
                </button>
                <span className="px-4 py-1 border-x">{quantity}</span>
                <button
                  className="px-2 py-1"
                  onClick={() => handleQuantity("inc")}
                >
                  <Add />
                </button>
              </div>
            </div>
            <button
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors w-full"
              onClick={handleClick}
            >
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