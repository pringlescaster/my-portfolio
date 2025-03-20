import React from 'react'
import image0 from './assets/Rock paper scissors.svg'
import image1 from './assets/Linkmyte web project.svg'
import image2 from './assets/Linkmyte Customer App project.svg'
import yorkk from './assets/MacBook Air (15 inch).svg'
import image3 from './assets/Gathr PROO.svg'
import ipadresss from './assets/ip addresssess.svg'
import arrow from './assets/Arrow 1.svg'
import prooo from './assets/dddd.svg';
import zmyte from './assets/zmytee.svg'
import rmr from './assets/rmr.svg'
import rushrooms from './assets/rushrooms.svg'
import brilliante from './assets/iPhone 12 Pro (Wooden Hands).svg'

function Projectsecond() {
  var projects = [
    {
      name: "RMR Food App",
      company: "DiffuserTech",
      department: "Mobile App",
      description: "A food ordering and meal management system designed for hospitals, enabling seamless patient meal tracking and delivery.",
      image: rmr,
      link: "https://www.figma.com/proto/JS9HAM0Fg9KS790YorQx5W/RMR-Food-App?page-id=0%3A1&node-id=21-278"
    },
    {
      name: "Zmyte Web App",
      company: "DiffuserTech",
      department: "Web Design",
      description: "An AI-powered email and WhatsApp campaign automation platform, optimized for multilingual support and real-time analytics.",
      image: zmyte,
      link: "https://www.figma.com/proto/DGUV5pCL60PDN8kBXSoDUK/Zmyte?page-id=0%3A1"
    },
    {
      name: "All In Car Webdesign",
      company: "E-Commerce Car",
      department: "Web Design & Fullstack",
      description: "A responsive e-commerce platform for car sales, designed for an intuitive shopping experience and easy vehicle listing.",
      image: prooo,
      link: "https://allincars-brown.vercel.app/"
    },
    {
      name: "Brilliante Car Wash App",
      company: "Sohoby Software Development Company",
      department: "UI/UX Design",
      description: "A premium car wash service app with booking, tracking, and subscription features, ensuring seamless customer interactions.",
      image: brilliante,
      link: "https://www.figma.com/proto/WiGpab2GdJ5MHRnma0R0gj/Untitled?page-id=0%3A1&node-id=126-842"
    },
    {
      name: "RushRoom Rental App",
      company: "Sohoby Software Development Company",
      department: "UI/UX Design",
      description: "A rental booking platform that provides a smooth user experience for both short-term and long-term accommodations.",
      image: rushrooms,
      link: "https://www.figma.com/proto/ofivgmecbeDWgiscwaQR1u/Untitled?page-id=0%3A1"
    },
    {
      name: "Linkmyte Customer App",
      company: "Sohoby Software Development Company",
      department: "UI/UX Design",
      description: "An NFC-based digital business card solution that eliminates the need for physical cards, allowing seamless networking.",
      image: image2,
      link: "https://www.figma.com/proto/UPUS8Eza6WfdCmtExxyOuA/LinkMyte-Customer-App?page-id=1219%3A18361"
    },
    {
      name: "IP Address Tracker",
      company: "Self Development",
      department: "Frontend Development",
      description: "A web-based tool for tracking and analyzing IP addresses, providing real-time geographical insights.",
      image: ipadresss,
      link: "https://ip-address-wheat.vercel.app/"
    },
    {
      name: "Rock, Paper, Scissors Game",
      company: "Self Development",
      department: "UI/UX Design, Frontend Development",
      description: "A fun, interactive Rock, Paper, Scissors game with an engaging UI, built to showcase frontend development skills.",
      image: image0,
      link: "https://rock-paper-scissors-game-sudden-death.vercel.app/"
    }
  ];
  


  return (
    <div className='bg-[#F3F9F6] grid justify-center md:grid-cols-2 md:gap-x-8 md:px-6 px-2 py-8 gap-y-8 lg:grid-cols-4'>
      {projects.map((project, index) => (
        <a href={project.link} key={index} target="_blank" rel="noreferrer">
          <div className='bg-white py-4 px-4 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
            <img className='rounded-t-lg' src={project.image} alt={project.name} />
            <div className='pt-4 grid gap-y-1'>
              <h2 className='text-zinc-800 text-[14px] font-semibold'>{project.name}</h2>
              <p className='text-stone-500 text-[12px] font-medium'>{project.company}</p>
              <p className='text-rose-600 font-medium text-[12px]'>{project.department}</p>
              <p className='text-gray-600 text-[12px] leading-snug mt-1'>{project.description}</p>
              <div className='flex items-center gap-x-2 mt-2'>
                <a className='text-cyan-700 font-medium text-[12px]' href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
                <img src={arrow} alt="arrow" className='h-4 w-4' />
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projectsecond;
