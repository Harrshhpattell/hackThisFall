// import React from 'react'
// import herosectionImage from "../../public/herosectionImage";
import herosectionImage from "../../public/herosectionImage.png";

const arrowIcon = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.41668 0.478516V2.14518H8.57501L0.583344 10.1368L1.75834 11.3118L9.75001 3.32018V10.4785H11.4167V0.478516H1.41668Z"
      fill="#1E1E1E"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <>
      <div className="w-[90%] lg:w-4/5 mx-auto my-5 p-3 sm:p-5 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
          <h1 className="clashDisplay600 text-[35px] md:text-[64px] leading-tight">
            Welcome to Create Content Design
          </h1>
          <p className="text-lg">
            An organization is actively combating the adverse effects of climate
            change by implementing strategies to minimize waste generation.
          </p>
          <div className="py-10 flex flex-col sm:flex-row items-center gap-5">
            <button className="bg-black text-white px-5 py-2 text-base md:text-lg rounded w-full sm:w-auto border border-black hover:text-black hover:bg-white transition-colors duration-200 ease-in-out">
              Get Started
            </button>
            <button className="bg-white text-black border border-black px-5 py-2 text-base md:text-lg w-full sm:w-auto rounded flex items-center gap-3 justify-center hover:border-blue-500">
              Find Out More <span>{arrowIcon}</span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={herosectionImage} alt="img" />
        </div>
      </div>
      <div className="w-[90%] lg:w-4/5 mx-auto my-5 p-3 sm:p-5 bg-black flex flex-col justify-center">
        <div className="my-5">
          <h1 className="clashDisplay500 text-white text-center text-base md:text-lg">
            Explore Sustainable Living Through Creative Upcycling Projects
          </h1>
        </div>
        <div className="text-[#A5A5A5] text-sm lg:text-[24px] clashDisplay500 w-full">
          <ul className="flex flex-wrap  items-center justify-evenly my-5 gap-4">
            <li className="shrink-0">Eco-friendly crafts</li>
            <li className="shrink-0">Creative reuse</li>
            <li className="shrink-0">DIY upcycling</li>
            <li className="shrink-0">Waste reduction</li>
            <li className="shrink-0">Sustainable living</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
