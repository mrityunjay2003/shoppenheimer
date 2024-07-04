import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../data/data";

const SliderItem = ({ img, title, desc }) => {
  return (
    <>
      <div className="w-1/2 h-full">
        <img
          src={img}
          alt="photo1"
          className="h-[91%] flex items-center justify-center"
        />
      </div>
      <div className="w-1/2 p-12">
        <h1 className="font-semibold text-7xl">{title}</h1>
        <p className="my-[50px] mx-0 tracking-[3px]">{desc}</p>
        <button className="p-2 bg-transparent border border-slate-950 cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </>
  );
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  const slideClass = [
    "flex items-center w-screen h-screen transform translate-x-[0vw] transition-all duration-400 ease-in",
    "flex items-center w-screen h-screen transform translate-x-[-100vw] transition-all duration-400 ease-in",
    "flex items-center w-screen h-screen transform translate-x-[-200vw] transition-all duration-400 ease-in",
  ];

  return (
    <div className="w-full h-screen flex relative overflow-hidden">
      <div
        className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto left-2 cursor-pointer opacity-50 z-10"
        onClick={() => handleClick("left")}
      >
        <KeyboardArrowLeft />
      </div>
      <div className="h-full flex">
        {sliderItems.map((item) => (
          <div
            style={{ backgroundColor: `#${item.bg}` }}
            className={slideClass[slideIndex]}
            key={item.id}
          >
            <SliderItem {...item} />
          </div>
        ))}
      </div>
      <div
        className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center absolute top-0 bottom-0 m-auto right-2 cursor-pointer opacity-50 z-10"
        onClick={() => handleClick("right")}
      >
        <KeyboardArrowRight />
      </div>
    </div>
  );
};

export default Slider;
