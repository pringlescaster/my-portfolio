import React, { useState } from "react";
import loGo from "./assets/LOGO.svg";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

function Aboutnavbar() {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
      setNav(!nav);
    };
  

    return (
        <div className="bg-[#D6E9E4] px-4 flex justify-between items-center">
          <img src={loGo} alt="Logo" />
          <ul className="hidden gap-x-4 px-4 justify-center items-center md:flex">
            <li className="text-neutral-900 text-sm font-semibold font-openSans p-3 hover:text-orange-600">
              <a href="/">HOME</a>
            </li>
            <li className="text-neutral-900 text-sm font-semibold font-openSans p-3 hover:text-orange-600">
              <a href="/">PROJECTS</a>
            </li>
            <li className="text-orange-600 text-sm font-semibold font-openSans p-3 ">
              <a href="/">ABOUT</a>
            </li>
            <li className="text-neutral-900 text-sm font-semibold font-openSans p-3 hover:text-orange-600">
              <a href="/">CONTACT</a>
            </li>
          </ul>
          <div onClick={handleClick} className="block md:hidden">
            {nav ? <CgClose size={22} /> : <CgMenuRightAlt size={22} />}
          </div>
          <div
            className={`fixed top-0 right-0 w-full h-full bg-[#D6E9E4] transition-transform duration-300 ease-in-out ${
              nav ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center px-3">
              <img src={loGo} className="w-28 pt-4" alt="Logo" />
              <div onClick={handleClick}>{nav ? <CgClose size={22} /> : <CgMenuRightAlt size={22} />}</div>
            </div>
            <ul className="pt-4 pl-3 gap-y-3">
              <li className="text-neutral-900 text-sm font-semibold font-openSans p-3">HOME</li>
              <li className="text-neutral-900 text-sm font-semibold font-openSans p-3">PROJECTS</li>
              <li className="text-orange-600 text-sm font-semibold font-openSans p-3">ABOUT</li>
              <li className="text-neutral-900 text-sm font-semibold font-openSans p-3">CONTACT</li>
            </ul>
          </div>
        </div>
      );
}

export default Aboutnavbar
