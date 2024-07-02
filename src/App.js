import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import loGo from "./Components/assets/LOGO.svg";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

function App() {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setNav(!nav);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-orange-600 text-sm font-semibold font-openSans p-3"
      : "text-neutral-900 text-sm font-semibold font-openSans p-3 hover:text-orange-600";
  };

  return (
    <div>
      <div className="bg-[#D6E9E4] px-4 flex justify-between items-center">
        <img src={loGo} alt="Logo" />
        <ul className="hidden gap-x-4 px-4 justify-center items-center md:flex">
          <li className={getLinkClass("/")}>
            <Link to="/">HOME</Link>
          </li>
          <li className={getLinkClass("/projects")}>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className={getLinkClass("/about")}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className={getLinkClass("/contact")}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div onClick={handleClick} className="block md:hidden">
          {nav ? <CgClose size={22} /> : <CgMenuRightAlt size={22} />}
        </div>
        <div
          className={` fixed top-0 right-0 w-full h-full bg-[#D6E9E4] transition-transform duration-300 ease-in-out ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-3">
            <img src={loGo} className="w-28 pt-4" alt="Logo" />
            <div onClick={handleClick}>{nav ? <CgClose size={22} /> : <CgMenuRightAlt size={22} />}</div>
          </div>
          <ul className="pt-4 pl-3 gap-y-3">
            <li className={getLinkClass("/")}>
              <Link to="/" onClick={handleClick}>HOME</Link>
            </li>
            <li className={getLinkClass("/projects")}>
              <Link to="/projects" onClick={handleClick}>PROJECTS</Link>
            </li>
            <li className={getLinkClass("/about")}>
              <Link to="/about" onClick={handleClick}>ABOUT</Link>
            </li>
            <li className={getLinkClass("/contact")}>
              <Link to="/contact" onClick={handleClick}>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

