import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Links from "../links/Links";

const Navbar = () => {
  const route = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 6, name: "Login", path: "/login" },
  ];

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className=" bg-violet-400">
      <div className=" container relative">
        <div className="navbar py-5 px-5 text-center items-center text-white flex justify-between">
          {/* left */}
          <div className="brand w-2/4 text-start text-xl font-bold">
            RESPONSIVE NAV
          </div>
          {/* center */}
          <ul
            className={`absolute z-0 w-full right-0 ${
              open ? "top-[100%]" : "top-[-420px]"
            } lg:flex justify-end bg-violet-400 lg:static duration-500 ease-linear`}
          >
            {route.map((route) => (
              <Links key={route.id} route={route}></Links>
            ))}
          </ul>
          {/* right */}
          <div className="lg:hidden" onClick={() => toggle()}>
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
