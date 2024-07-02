import React from 'react'
import Imagee from './assets/Rectangle 9.svg'

function Thirdabout() {
  return (
    <div className='px-4 py-8 md:py-20 md:px-4 lg:px-10 bg-white grid gap-y-8 md:grid-cols-2 md:grid-col- md:justify-center items-center md:gap-x-10 lg:gap-x-40'>
        <img src={Imagee} className='md:flex sm:hidden' alt="" />
      <div className='grid gap-y-1'>
      <h1 className='text-left font-semibold font-Nunito text-lg md:text-left text-[#111111]'>Crafting Digital Experiences at the Intersection of Design and Development:</h1>
      <p className='text-left text-sm font-normal font-openSans text-neutral-700 md:text-left'>As a UI/UX designer and full-stack developer, I thrive at the intersection of design and development, seamlessly merging aesthetic appeal with functional excellence. With a keen eye for detail and a knack for problem-solving, I craft digital experiences that not only captivate users but also elevate their interaction with technology. From designing intuitive interfaces to architecting robust back-end systems, I'm committed to pushing the boundaries of digital innovation.</p>
      </div>
     
    </div>
  )
}

export default Thirdabout
