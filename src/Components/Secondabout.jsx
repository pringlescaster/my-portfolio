import React from 'react'
import image1 from './assets/Imageabout1.svg'

function Secondabout() {
  return (
    <div className='px-4 py-8 md:py-20 lg:px-10 bg-[#F3F9F6] grid gap-y-8 md:grid-cols-2 md:grid-col- md:justify-center items-center md:gap-x-10 lg:gap-x-40'>
      <div className='grid gap-y-1'>
      <h1 className='text-left font-semibold font-Nunito text-lg md:text-left'>Embarking on a Tech Journey in Nigeria</h1>
      <p className='text-left text-sm font-normal font-openSans text-neutral-700 md:text-left'>Growing up in Nigeria, I embarked on a transformative journey into the world of technology. My passion for digital innovation led me to Larva Coding Academy, where I immersed myself in learning the intricacies of UI/UX design and full-stack development. It was here that I discovered my knack for blending creativity with technical prowess, laying the foundation for my career in the tech industry.</p>
      </div>
      <img src={image1} className='' alt="" />
    </div>
  )
}

export default Secondabout
