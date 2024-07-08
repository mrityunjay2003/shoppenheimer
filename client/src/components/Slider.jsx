import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { sliderItems } from "../data/data";

const SliderItem = ({ img, title, desc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-full px-4 md:px-12">
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center mb-8 md:mb-0">
        <img
          src={img}
          alt={title}
          className="max-h-full max-w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left p-4 md:p-12">
        <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl mb-4">{title}</h1>
        <p className="my-4 md:my-8 tracking-wide text-lg">{desc}</p>
        <button className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-full h-full"
            style={{ backgroundColor: `#${item.bg}` }}
          >
            <SliderItem {...item} />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 focus:outline-none"
        onClick={() => handleClick("left")}
      >
        <KeyboardArrowLeft className="text-3xl" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 focus:outline-none"
        onClick={() => handleClick("right")}
      >
        <KeyboardArrowRight className="text-3xl" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === slideIndex ? "bg-black" : "bg-gray-300"
              }`}
            onClick={() => setSlideIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;