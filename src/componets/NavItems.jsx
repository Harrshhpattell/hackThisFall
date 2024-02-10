import { NavLink } from "react-router-dom";

const homeIcon = (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z" />
  </svg>
);

const aboutIcon = (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9 7V2.2a2 2 0 0 0-.5.4l-4 3.9a2 2 0 0 0-.3.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-1 9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm2-5c.6 0 1 .4 1 1v6a1 1 0 1 1-2 0v-6c0-.6.4-1 1-1Zm4 4a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z" />
  </svg>
);

const diysIcon = (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      d="M4 13h3.4a1 1 0 0 1 1 .6 4 4 0 0 0 7.3 0 1 1 0 0 1 .9-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9M9 7h6m-7 3h8"
    />
  </svg>
);

const blogIcon = (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      d="M12 6v13m0-13c-2.8-.8-4.7-1-8-1a1 1 0 0 0-1 1v11c0 .6.5 1 1 1 3.2 0 5 .2 8 1m0-13c2.8-.8 4.7-1 8-1 .6 0 1 .5 1 1v11c0 .6-.5 1-1 1-3.2 0-5 .2-8 1"
    />
  </svg>
);

const shopIcon = (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4 4c0-.6.4-1 1-1h1.5c.5 0 .9.3 1 .8L7.9 6H19a1 1 0 0 1 1 1.2l-1.3 6a1 1 0 0 1-1 .8h-8l.2 1H17a3 3 0 1 1-2.8 2h-2.4a3 3 0 1 1-4-1.8L5.7 5H5a1 1 0 0 1-1-1Z" />
  </svg>
);

const navItems = [
  {
    name: "Home",
    path: "/hackThisFall",
    icon: "homeIcon",
  },
  {
    name: "About",
    path: "/about",
    icon: "aboutIcon",
  },
  {
    name: "DIYs",
    path: "./DIYs",
    icon: "diysIcon",
  },
  {
    name: "Blogs",
    path: "./blogs",
    icon: "blogIcon",
  },
  {
    name: "Shop",
    path: "./shop",
    icon: "shopIcon",
  },
];

const iconMapping = {
  homeIcon: homeIcon,
  aboutIcon: aboutIcon,
  diysIcon: diysIcon,
  blogIcon: blogIcon,
  shopIcon: shopIcon,
};

const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-[34px]">
      {navItems.map((items, itemsIndex) => (
        <NavLink
          to={`${items.path}`}
          className="text-base text-black clashDisplay600 cursor-pointer flex items-center justify-start gap-5 w-full"
          key={itemsIndex}
        >
          <span className="block md:hidden">{iconMapping[items.icon]}</span>
          {items.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavItems;
