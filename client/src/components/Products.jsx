import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { popularProducts } from "../data/data";

const ProductItem = ({ img }) => {
  const iconclass =
    "w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center m-1 transition duration-300 ease-in-out hover:scale-110 hover:bg-slate-100";
  return (
    <div className="group flex m-1 min-w-[280px] h-[350px] items-center justify-center relative">
      <img src={img} alt="reload" className="h-3/4" />

      <div className="cursor-pointer opacity-0 w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-[3] flex items-center justify-center transition duration-300 ease-in-out group-hover:opacity-100">
        <div className={iconclass}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconclass}>
          <SearchOutlined />
        </div>
        <div className={iconclass}>
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className=" grid grid-cols-4 gap-4 p-5 hover:">
      {popularProducts.map((item) => (
        <ProductItem key={item.id} img={item.img} />
      ))}
    </div>
  );
};

export default Products;
