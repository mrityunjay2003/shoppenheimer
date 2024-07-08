import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl max-w-xs">
            <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    src={item.img}
                    alt={item.title}
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ProductAction icon={<ShoppingCartOutlined />} onClick={() => console.log('Add to cart')} />
                <Link to={`/product/${item._id}`}>
                    <ProductAction icon={<SearchOutlined />} />
                </Link>
                <ProductAction icon={<FavoriteBorderOutlined />} onClick={() => console.log('Add to favorites')} />
            </div>
        </div>
    );
};

const ProductAction = ({ icon, onClick }) => (
    <button
        onClick={onClick}
        className="m-1 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
        {icon}
    </button>
);

export default Product;
