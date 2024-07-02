import React from "react";
import Programmingg from "./assets/Programming Language Icon.svg";
import Mobile from "./assets/Mobile Language Icon.svg"
import Webdesign from "./assets/Web Design Icon.svg"
import Freelancing from "./assets/Freelancing Icon.svg"
import UiuxConsulting from "./assets/UIUX Consulting.svg"
import Prototyping from "./assets/Prototyping.svg"

function Third() {
  return (
    <div className="grid grid-cols-1 bg-[#F3F9F6] justify-center px-4 py-20 ">
      <div className="grid grid-cols-1 gap-y-6 md:gap-y-12">
        <h1 className="text-center text-2xl font-bold text-[#111111] font-Nunito md:text-2xl md:text-center md:font-bold">
          Services
        </h1>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3  xl:grid  xl:justify-center md:mx-auto lg:gap-y-12  xl:mx-auto md:gap-y-10 md:gap-x-10 lg:gap-x-12 lg:grid xl:grid-cols-3 ">
          <div className="shadow-lg p-6 grid justify-center gap-y-4 w-[300px] rounded-lg bg-white mx-auto">
            <img src={Programmingg} alt="" />
            <div className="grid gap-y-2">
              <h2 className="font-semibold text-left">Programming Language</h2>
              <p className="font-regular text-[#444444] text-sm">
                In programming languages, I excel in JavaScript, HTML, CSS, and
                React.js, leveraging these tools to craft dynamic and
                user-centric web solutions.
              </p>
            </div>
          </div>

          <div className="shadow-lg p-6 grid justify-center gap-y-4 w-[300px] rounded-lg bg-white mx-auto">
            <img src={Mobile} alt="" />
            <div className="grid gap-y-2">
              <h2 className="font-semibold text-left">Mobile App Design</h2>
              <p className="font-regular text-[#444444] text-sm">
              In mobile app design, I create intuitive experiences for iOS, Android, and cross-platform. Services include user research, prototyping, and UI/UX design.
              </p>
            </div>
          </div>

          <div className="shadow-lg p-6 grid justify-center gap-y-4 w-[300px] rounded-lg bg-white mx-auto">
            <img src={Webdesign} alt="" />
            <div className="grid gap-y-2">
              <h2 className="font-semibold text-left">Web Design</h2>
              <p className="font-regular text-[#444444] text-sm">
              In web design, I specialize in creating visually captivating and user-friendly online experiences. From concept to launch, I offer tailored services to ensure seamless navigation and engagement across devices.
              </p>
            </div>
          </div>

          <div className="shadow-lg p-6 grid justify-center gap-y-4 w-[300px] rounded-lg bg-white mx-auto">
            <img src={Freelancing} alt="" />
            <div className="grid gap-y-2">
              <h2 className="font-semibold text-left">Freelancing</h2>
              <p className="font-regular text-[#444444] text-sm">
              Freelancer offering customized solutions from start to finish, empowering you to focus on your core objectives with confidence and ease.
              </p>
            </div>
          </div>

          <div className="shadow-lg p-6 grid justify-center gap-y-4 w-[300px] rounded-lg bg-white mx-auto">
            <img src={UiuxConsulting} alt="" />
            <div className="grid gap-y-2">
              <h2 className="font-semibold text-left">UI/UX Consulting</h2>
              <p className="font-regular text-[#444444] text-sm">
              Providing guidance and recommendations to improve existing designs or develop new ones based on best practices and user feedback.
              </p>
            </div>
          </div>

          <div className="shadow-lg p-6 grid justify-center gap-y-4 w-[300px] rounded-lg bg-white mx-auto">
            <img src={Prototyping} alt="" />
            <div className="grid gap-y-2">
              <h2 className="font-semibold text-left">Prototyping</h2>
              <p className="font-regular text-[#444444] text-sm">
              In web design, I specialize in crafting visually stunning and intuitive online experiences. From initial concept to final launch, I provide customized services to ensure seamless navigation and user engagement across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
