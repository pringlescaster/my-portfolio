import React from "react";
import { ReactTyped } from "react-typed";
import HeroImg from "./assets/ProfileImg.svg";

function Hero() {
  return (
    <div className="grid grid-cols-1 bg-[#D6E9E4] justify-center py-12">
      <div className="grid grid-cols-1 justify-center mx-auto text-center px-4 items-center gap-y-6">
        <h1 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-bold font-Nunito">
          Hello, I’m Ayantoye David,{" "}
          <ReactTyped
            className="text-rose-500"
            strings={["UI/UX Designer", "Frontend Developer", "Backend Developer (MERN"]}
            typeSpeed={100}
            backSpeed={110}
            loop
          />
        </h1>
        <button className="bg-cyan-700 px-6 py-3 h-10 w-36 mx-auto text-white font-semibold font-openSans justify-center text-sm rounded-[10px] text-center ">
          <a href="/projects">View Projects</a>
        </button>
      </div>
      <img src={HeroImg} className="mx-auto" alt="" />
    </div>
  );
}

export default Hero;
