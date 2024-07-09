import { Add, Favorite, Remove, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CartItem = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity)
    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };
    return (
        <div className="flex flex-col md:flex-row justify-between mb-5 border-b pb-5">
            <div className="flex-[2] flex">
                <Link to={`/product/${product._id}`}>
                    <img
                        className="w-[100px] h-[100px] object-cover mr-4"
                        src={product.img}
                        alt={product.name}
                    />
                </Link>
                <div className="flex flex-col justify-between">
                    <span className="font-semibold">{product.title}</span>
                    <span className="text-gray-500">ID: {product._id}</span>
                    <div className="flex items-center">
                        <div
                            className="w-5 h-5 rounded-full mr-2"
                            style={{ backgroundColor: product.color }}
                        ></div>
                        <span className="text-gray-500">Size: {product.size}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4 md:mt-0">
                <div className="flex items-center border rounded-md">
                    <button className="px-2 py-1" onClick={() => handleQuantity("dec")}>
                        <Remove />
                    </button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button className="px-2 py-1" onClick={() => handleQuantity("inc")}>
                        {" "}
                        <Add />
                    </button>
                </div>
                <div className="text-xl font-semibold ml-4">
                    ${(product.price * product.quantity).toFixed(2)}
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cart.products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Announcement />
            <div className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-center mb-8">
                    Your Shopping Cart
                </h1>
                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => navigate("/products")}
                        className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
                    >
                        Continue Shopping
                    </button>
                    <div className="hidden md:flex space-x-4">
                        <button className="flex items-center">
                            <ShoppingCart className="mr-2" />
                            Shopping Bag ({cart.products.length})
                        </button>
                        <button className="flex items-center">
                            <Favorite className="mr-2" />
                            Your Wishlist (0)
                        </button>
                    </div>
                    <button
                        onClick={() => navigate("/checkout")}
                        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                    >
                        Checkout Now
                    </button>
                </div>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-[2]">
                        {cart.products.map((product) => (
                            <CartItem key={product._id} product={product} />
                        ))}
                    </div>
                    <div className="flex-1">
                        <div className="bg-gray-100 rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${calculateTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Estimated Shipping</span>
                                    <span>$5.90</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping Discount</span>
                                    <span className="text-green-500">-$5.90</span>
                                </div>
                                <div className="flex justify-between text-xl font-semibold">
                                    <span>Total</span>
                                    <span>${calculateTotal().toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate("/checkout")}
                                className="w-full bg-black text-white py-3 rounded mt-6 hover:bg-gray-800 transition"
                            >
                                Checkout Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
