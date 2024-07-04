import React from 'react'
import image0 from './assets/Rock paper scissors.svg'
import image1 from './assets/Linkmyte web project.svg'
import image2 from './assets/Linkmyte Customer App project.svg'
import yorkk from './assets/MacBook Air (15 inch).svg'
import image3 from './assets/Gathr PROO.svg'
import ipadresss from './assets/ip addresssess.svg'
import arrow from './assets/Arrow 1.svg'
import prooo from './assets/dddd.svg'

function Projectsecond() {
    var projects = [


      {
        name: "All In Car Webdesign",
        company: "E-Commerce Car",
        department: "UIUX Design",
        image: prooo,
        link: "https://www.figma.com/proto/v4iAfKCLKhhDr5qGwC5s8T/All-In-Car-Web-Design?page-id=0%3A1&node-id=144-436&viewport=534%2C153%2C0.25&t=mJHieLHxdzatmuoM-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=30%3A15&show-proto-sidebar=1"
      },

      {
        name: "York Web Design (Redesigned)",
        company: "Sohoby Software Development Company",
        department: "UIUX Design",
        image: yorkk,
        link: "https://www.figma.com/proto/7HXBH6QYuupr0uRLWBf4bd/Untitled?page-id=0%3A1&node-id=5-42&viewport=610%2C1506%2C0.13&t=Q6cw3JDU41qZBY2h-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=25%3A1162"
      },




      {
        name: "Linkmyte Customer App",
        company: "Sohoby Software Development Company",
        department: "UIUX Design",
        image: image2,
        link: "https://www.figma.com/proto/UPUS8Eza6WfdCmtExxyOuA/LinkMyte-Customer-App?page-id=1219%3A18361&node-id=1514-6675&viewport=352%2C163%2C0.02&t=trqNBBYvRu1eqJ4o-1&scaling=scale-down&starting-point-node-id=1219%3A18362"
      },




      {
        name: "Linkmyte Web Project",
        company: "Sohoby Software Development Company",
        department: "UIUX Design, Frontend Development",
        image: image1,
        link: "https://linkmyte-project.vercel.app/"
      },
     
      {
        name: "Gathr Event Location App",
        company: "Self Development",
        department: "UIUX Design",
        image: image3,
        link: "https://www.figma.com/proto/iTlvPlZ1mdinXkT7zj8a4q/Event-App?page-id=0%3A1&node-id=255-687&m=dev&scaling=scale-down&starting-point-node-id=273%3A869&t=Me1TPDccIQ43b02g-1&show-proto-sidebar=1"
      },


        {
            name: "IP Address",
            company: "Self Development",
            department: "Frontend Development",
            image: ipadresss,
            link: "https://ip-address-wheat.vercel.app/"
          },   

        {
            name: "Rock, Paper, Scissors Game",
            company: "Self Development",
            department: "UIUX Design, Frontend Development",
            image: image0,
            link: "https://rock-paper-scissors-game-sudden-death.vercel.app/"
          },
        
      
    ];
    return (
       
        <div className='bg-[#F3F9F6] grid justify-center md:grid-cols-2 md:gap-x-8 md:px-6 px-2 py-8 gap-y-8 lg:grid-cols-4'>
            {projects.map(function (project, index) {
                return ( <>
                    <a href={project.link}>
                    <div key={index} className='bg-white py-4 px-4 rounded-lg shadow-md'>
                        <img className='rounded-t-lg' src={project.image} alt={project.name} />
                        <div className='pt-4 grid gap-y-1'>
                            <h2 className='text-zinc-800 text-[14px] font-openSans font-medium'>{project.name}</h2>
                            <p className='text-stone-500 text-[12px] font-openSans font-medium'>{project.company}</p>
                            <p className='text-rose-600 font-medium font-openSans text-[12px]'>{project.department}</p>
                            <div className='flex items-center gap-x-2'>
                                <a className='text-cyan-700 font-medium font-openSans text-[12px]' href={project.link} target="_blank" rel="noreferrer">View Project</a>
                                <img src={arrow} alt="arrow" className='h-4 w-4'/>
                            </div>
                        </div>
                    </div>
                    </a>
                    </>
                );
            })}
        </div>
       
    );
}

export default Projectsecond
