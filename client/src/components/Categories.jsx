import { categories } from "../data/data";

const CategoryItem = ({ img, title }) => {
  return (
    <div className="flex m-1 w-1/3 h-[70vh] relative">
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
        <h1 className="text-white text-3xl font-black mb-5">{title}</h1>
        <button className="border-0 p-2 bg-slate-200 text-zinc-800 font-semibold">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="flex p-8 justify-between">
      {categories.map((item) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Categories;
