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

const starFillIcon = (
  <svg
    width="210"
    height="206"
    viewBox="0 0 210 206"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M118.358 68.0532L118.521 68.8521L119.159 68.3448L171.526 26.7175L139.624 85.5174L139.236 86.234L140.051 86.2556L206.924 88.0281L144.69 112.566L143.931 112.865L144.542 113.405L194.63 157.748L131.184 136.542L130.411 136.283L130.531 137.09L140.398 203.254L105.426 146.227L105 145.532L104.574 146.227L69.6023 203.254L79.4691 137.09L79.5894 136.283L78.8161 136.542L15.3698 157.748L65.4581 113.405L66.0686 112.865L65.3101 112.566L3.07633 88.0281L69.9493 86.2556L70.7643 86.234L70.3755 85.5174L38.474 26.7175L90.841 68.3448L91.4793 68.8521L91.6421 68.0532L105 2.50399L118.358 68.0532Z"
      fill="#A5A5A5"
      stroke="black"
    />
  </svg>
);

const starUnfillIcon = (
  <svg
    width="242"
    height="242"
    viewBox="0 0 242 242"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M128.58 83.054L128.747 84.5554L129.509 83.2513L164.299 23.7497L143.359 89.4178L142.9 90.857L144.127 89.9758L200.111 49.7686L154.272 101.242L153.267 102.371L154.746 102.065L222.243 88.104L159.431 116.483L158.055 117.105L159.531 117.428L226.871 132.127L157.946 132.505L156.435 132.514L157.652 133.408L213.192 174.227L150.072 146.538L148.689 145.931L149.437 147.243L183.572 207.123L137.171 156.155L136.155 155.038L136.304 156.541L143.133 225.127L121.475 159.693L121 158.259L120.525 159.693L98.867 225.127L105.696 156.541L105.845 155.038L104.829 156.155L58.4281 207.123L92.5632 147.243L93.3113 145.931L91.928 146.538L28.8084 174.227L84.3476 133.408L85.5648 132.514L84.0542 132.505L15.1295 132.127L82.4695 117.428L83.9453 117.105L82.5687 116.483L19.7565 88.104L87.2536 102.065L88.7329 102.371L87.7283 101.242L41.8895 49.7686L97.8729 89.9758L99.0998 90.857L98.6409 89.4178L77.7014 23.7497L112.491 83.2513L113.253 84.5554L113.42 83.054L121 14.5463L128.58 83.054Z"
      fill="#F9F9F9"
      stroke="black"
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
            <button className="bg-black clashDisplay600 text-white px-5 py-2 text-base md:text-lg rounded w-full sm:w-auto border border-black hover:text-black hover:bg-white transition-colors duration-200 ease-in-out">
              Get Started
            </button>
            <button className="bg-white text-black clashDisplay600 border border-black px-5 py-2 text-base md:text-lg w-full sm:w-auto rounded flex items-center gap-3 justify-center hover:border-blue-500">
              Find Out More <span>{arrowIcon}</span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img src={herosectionImage} alt="img" />
        </div>
      </div>
      <div className="my-5 p-3 sm:p-5 bg-black flex flex-col justify-center">
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
      <div className="w-[90%] lg:w-4/5 mx-auto my-5 p-3 sm:p-5 relative z-30">
        <span className="absolute top-20 left-28 z-40">{starFillIcon}</span>
        <div className="w-[70%] mx-auto bg-[#D9D9D9] border border-black h-[500px] my-40 relative z-30 "></div>
        <span className="absolute bottom-20 right-28 z-20">
          {starUnfillIcon}
        </span>
      </div>
    </>
  );
};

export default HeroSection;
