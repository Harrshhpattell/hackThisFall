// import React from 'react'

const Footer = () => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap items-center justify-between mx-5 lg:mx-20 gap-10">
        <div>
          <h1 className="clashDisplay700 text-[90px] text-black">CCD</h1>
        </div>
        <div>
          <h3 className="text-xl clashDisplay600 text-[#242831]">About</h3>
          <ul className="text-[#6B7794] text-lg py-5 space-y-5">
            <li className="cursor-pointer">DIYs</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="clashDisplay600 tracking-wide text-[24px] text-[#242831] py-3">
            Subscribe
          </h3>
          <p className="text-sm text-[#6B7794] py-4">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="h-10 flex items-center gap-5">
            <input
              type="text"
              className="border border-black rounded p-1 px-3 h-full m-0"
              placeholder="enter your mail"
            />
            <button className="text-white bg-black rounded p-1 m-0 px-3 text-base clashDisplay500 tracking-wide h-full">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-[#6B7794] py-4">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
      </div>
      <div className="border-t border-[#E1E4EA] mx-5 lg:mx-20">
        <ul className="text-[#3E4556] flex items-center justify-start flex-wrap gap-5 py-5">
          <li className="cursor-pointer hover:text-black">
            2024 CCD. All right reserved.
          </li>
          <li className="cursor-pointer hover:text-black">Privacy Policy</li>
          <li className="cursor-pointer hover:text-black">Terms of Service</li>
          <li className="cursor-pointer hover:text-black">Cookies Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
