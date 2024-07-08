import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Cart = () => {
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className="p-5 md:p-10">
                <h1 className="font-light text-center">YOUR BAG</h1>
                <div className="flex items-center justify-between p-5">
                    <button className="p-3 font-semibold cursor-pointer bg-transparent">CONTINUE SHOPPING</button>
                    <div className="hidden md:block">
                        <span className="underline cursor-pointer mx-2">Shopping Bag(2)</span>
                        <span className="underline cursor-pointer mx-2">Your Wishlist (0)</span>
                    </div>
                    <button className="p-3 font-semibold cursor-pointer border-none bg-black text-white">CHECKOUT NOW</button>
                </div>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-[3]">
                        <div className="flex flex-col md:flex-row justify-between mb-5">
                            <div className="flex-[2] flex">
                                <img
                                    className="w-[200px]"
                                    src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                                    alt="Product"
                                />
                                <div className="p-5 flex flex-col justify-around">
                                    <span>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </span>
                                    <span>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="w-5 h-5 rounded-full bg-black"></div>
                                    <span>
                                        <b>Size:</b> 37.5
                                    </span>
                                </div>
                            </div>
                            <div className="flex-[1] flex flex-col items-center justify-center">
                                <div className="flex items-center mb-5">
                                    <Add />
                                    <span className="text-2xl mx-2">2</span>
                                    <Remove />
                                </div>
                                <div className="text-2xl font-light">$ 30</div>
                            </div>
                        </div>
                        <hr className="bg-[#eee] border-none h-[1px]" />
                        <div className="flex flex-col md:flex-row justify-between mb-5">
                            <div className="flex-[2] flex">
                                <img
                                    className="w-[200px]"
                                    src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                                    alt="Product"
                                />
                                <div className="p-5 flex flex-col justify-around">
                                    <span>
                                        <b>Product:</b> HAKURA T-SHIRT
                                    </span>
                                    <span>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <div className="w-5 h-5 rounded-full bg-gray-400"></div>
                                    <span>
                                        <b>Size:</b> M
                                    </span>
                                </div>
                            </div>
                            <div className="flex-[1] flex flex-col items-center justify-center">
                                <div className="flex items-center mb-5">
                                    <Add />
                                    <span className="text-2xl mx-2">1</span>
                                    <Remove />
                                </div>
                                <div className="text-2xl font-light">$ 20</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[1] border-[0.5px] border-gray-300 rounded-lg p-5 h-[50vh]">
                        <h1 className="font-light">ORDER SUMMARY</h1>
                        <div className="my-8 flex justify-between">
                            <span>Subtotal</span>
                            <span>$ 80</span>
                        </div>
                        <div className="my-8 flex justify-between">
                            <span>Estimated Shipping</span>
                            <span>$ 5.90</span>
                        </div>
                        <div className="my-8 flex justify-between">
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div className="my-8 flex justify-between font-semibold text-xl">
                            <span>Total</span>
                            <span>$ 80</span>
                        </div>
                        <button className="w-full p-3 bg-black text-white font-semibold">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
