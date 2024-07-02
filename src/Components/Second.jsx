import React from "react";
import Image from "./assets/futurism-perspective-digital-nomads-lifestyle.jpg";
import cv from "./assets/cv pngg.png";

function Second() {
  return (
    <div className="px-4 py-20 grid grid-cols-1 justify-center md:flex  md:px-14 md:justify-center bg-[#F3F9F6]">
      <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:justify-center md:items-center">
        <div className="grid grid-cols-1 gap-y-5">
          <div className="grid grid-cols-1 justify-center gap-y-2">
            <h1 className="text-center text-2xl font-semibold text-rose-500 font-Nunito md:text-2xl md:text-left md:font-bold">
              Who am I?
            </h1>
            <p className="text-center text-base font-normal text-[#222222] font-openSans md:text-left">
              I am David, a certified UI/UX designer and Frontend Developer
              based in Nigeria, specializing in crafting intuitive user
              experiences that seamlessly blend functionality with aesthetics.
              With a passion for innovative design solutions, I strive to create
              engaging digital experiences that resonate with users across
              diverse platforms and devices.
            </p>
          </div>
          <a href={cv} className="mx-auto md:ml-0" download><button className="bg-cyan-700 px-6 py-3 h-10 w-36 mx-auto text-white font-semibold font-openSans justify-center text-sm rounded-[10px] text-center md:mx-0 " >
            Download CV
          </button></a>
        </div>
        <img src={Image}  className="md:w-90 rounded-xl"></img>
      </div>
    </div>
  );
}

export default Second;
