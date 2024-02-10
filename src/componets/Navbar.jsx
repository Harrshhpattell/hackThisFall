// import React from 'react'

import { useState } from "react";
import NavItems from "./NavItems";

const profileIcon = (
  <svg
    width="36"
    height="34"
    viewBox="0 0 36 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2.83331C10.1622 2.83331 3.80115 9.17998 3.80115 17C3.80115 24.82 10.1622 31.1666 18 31.1666C25.8378 31.1666 32.1989 24.82 32.1989 17C32.1989 9.17998 25.8378 2.83331 18 2.83331ZM18 7.08331C20.357 7.08331 22.2597 8.98165 22.2597 11.3333C22.2597 13.685 20.357 15.5833 18 15.5833C15.643 15.5833 13.7404 13.685 13.7404 11.3333C13.7404 8.98165 15.643 7.08331 18 7.08331ZM18 27.2C14.4503 27.2 11.3123 25.3866 9.48069 22.6383C9.52329 19.8191 15.1602 18.275 18 18.275C20.8256 18.275 26.4767 19.8191 26.5193 22.6383C24.6877 25.3866 21.5497 27.2 18 27.2Z"
      fill="#1E1E1E"
    />
  </svg>
);

const humBurgerIcon = (
  <svg
    className="w-10 h-10"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path stroke="currentColor" d="M5 7h14M5 12h14M5 17h10" />
  </svg>
);

const closeIcon = (
  <svg
    className="w-7 h-7 "
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path stroke="currentColor" d="M6 18 18 6m0 12L6 6" />
  </svg>
);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu((isOpen) => !isOpen);
  };
  return (
    <div className="w-[90%] lg:w-4/5 mx-auto border border-black my-5 p-3 sm:p-5 rounded shadow-[2px_2px_1px_1px_#1e1e1e;] flex items-center justify-between sticky top-5 bg-white z-50">
      <div>
        <h1 className="clashDisplay700 text-[34px] font-bold text-black">
          CCD
        </h1>
      </div>
      <div className="flex items-center gap-5 md:gap-[34px]">
        <div className="hidden md:block">
          <NavItems />
        </div>
        <div>{profileIcon}</div>
        <div className="block md:hidden" onClick={() => handleMenu()}>
          {humBurgerIcon}
        </div>
      </div>

      <div
        className={`fixed top-0 bottom-0 right-0 w-4/5 h-screen overflow-y-auto  ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }  transition-transform duration-300 bg-[#f1f5f9] flex flex-col`}
      >
        <div className="border border-b flex items-center justify-between pt-7 p-5">
          <h1 className="clashDisplay700 text-[34px] font-bold text-black">
            Hello
          </h1>
          <button
            className="text-black border border-black rounded p-[1px]"
            onClick={() => handleMenu()}
          >
            {closeIcon}
          </button>
        </div>
        <div className="flex-1 flex justify-start w-full p-7">
          <NavItems />
        </div>
        <div>
          <h1 className="text-black bg-white flex items-center w-full justify-center">
            Create Content Design
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
