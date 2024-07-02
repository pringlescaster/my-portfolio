import React from "react";
import FigmaLogo from "./assets/Figma Logo.svg";
import HtmlLogo from "./assets/HTML Logo.svg";
import CssLogo from "./assets/Css Logo.svg";
import JavascriptLogo from "./assets/Javascript Logo.svg";
import ReactLogo from "./assets/React Logo.svg";
function Fourth() {
  return (
    <div className="grid grid-cols-1 bg-[#F3F9F6] px-4 py-20 justify-center items-center">
      <div className="grid grid-cols-1 justify-center items-center  gap-y-8 md:mx-auto">
        <h1 className="text-center text-2xl font-bold text-[rgb(17,17,17)] font-Nunito md:text-2xl md:text-center md:font-bold">
          My Skills and Work Experiences
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-24 md:px-10 lg:px-12 lg:gap-x-44 lg:mx-auto md:justify-center md:items-start justify-center gap-y-12 ">
          <div className="grid justify-center gap-y-8">
            <h1 className="text-rose-500 text-center font-semibold text-xl font-openSans md:text-left ">
              Skills
            </h1>
            <div className="flex flex-wrap gap-x-10 lg:mx-auto justify-center items-center gap-y-8 md:grid md:grid-cols-3 md:justify-start ">
              <div className="grid gap-y-2">
                <img src={FigmaLogo} className="w-7" alt="" />
                <h1 className="text-center text-sm font-openSans font-medium text-[#222222] md:text-left md:text-sm">
                  Figma
                </h1>
              </div>

              <div className="grid gap-y-3">
                <img src={HtmlLogo} className="w-10" alt="" />
                <h1 className="text-center text-sm font-openSans font-medium text-[#222222] md:text-left md:text-sm">
                  HTML
                </h1>
              </div>

              <div className="grid gap-y-3">
                <img src={CssLogo} className="w-10" alt="" />
                <h1 className="text-center text-sm font-openSans font-medium text-[#222222] md:text-left md:text-sm">
                  CSS
                </h1>
              </div>

              <div className="grid gap-y-3">
                <img src={JavascriptLogo} className="w-10" alt="" />
                <h1 className="text-center text-sm font-openSans font-medium text-[#222222] md:text-left">
                  Javascript
                </h1>
              </div>

              <div className="grid gap-y-3">
                <img src={ReactLogo} className="w-10" alt="" />
                <h1 className="text-center text-sm font-openSans font-medium text-[#222222] md:text-left">
                  React
                </h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1  justify-center items-start gap-y-8 md:gap-y-6">
            <h1 className="text-rose-500 text-center font-semibold text-xl font-openSans md:text-left md:gap-y-10 ">
              Experiences
            </h1>
            <div className="grid gap-y-2 md:gap-y-3">
              <h6 className="text-[#555555] font-openSans text-sm font-medium text-center md:text-left">
                2024 - Present
              </h6>
              <div>
                <h6 className="text-[#111111] text-base font-bold font-Nunito text-center md:text-left">
                  UI/UX Design
                </h6>
                <p className="text-[#2A848A] text-center md:text-left">
                  Sohoby Software Company, Saudi Arabia.
                </p>
              </div>
            </div>
            <div className="grid gap-y-2 md:items-center md:gap-y-3">
              <h6 className="text-[#555555] font-openSans text-sm font-medium text-center md:text-left">
                2023 - 2024
              </h6>
              <div>
                <h6 className="text-[#111111] text-base font-bold font-Nunito text-center md:text-left">
                  UI/UX Design
                </h6>
                <p className="text-[#2A848A] text-center md:text-left">
                  Freelancing
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 justify-center items-start gap-y-8 md:gap-y-6">
            <h1 className="text-rose-500 text-center font-semibold text-xl font-openSans md:text-left md:gap-y-10 ">
              Education
            </h1>
            <div className="grid gap-y-2 md:gap-y-3">
              <h6 className="text-[#555555] font-openSans text-sm font-medium text-center md:text-left">
                November, 2023 - April, 2024
              </h6>
              <div>
                <h6 className="text-[#111111] text-base font-bold font-Nunito text-center md:text-left">
                  Frontend Developer
                </h6>
                <p className="text-[#2A848A] text-center md:text-left">
                  Larva Coding Academy
                </p>
              </div>
            </div>
            <div className="grid gap-y-2 md:items-center md:gap-y-3">
              <h6 className="text-[#555555] font-openSans text-sm font-medium text-center md:text-left">
                June, 2023 - November, 2023
              </h6>
              <div>
                <h6 className="text-[#111111] text-base font-bold font-Nunito text-center md:text-left">
                  UI/UX Design
                </h6>
                <p className="text-[#2A848A] text-center md:text-left">
                  Larva Coding Academy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
