import React from 'react'
import imgg from './assets/lastaboutimg.svg'
function Fourthabout() {
  return (
    <div className='px-4 py-8 md:py-20 md:px-4 lg:px-10 bg-[#F3F9F6] grid gap-y-8 md:grid-cols-2 md:grid-col- md:justify-center items-center md:gap-x-10 lg:gap-x-40'>
      <div className='grid gap-y-1'>
      <h1 className='text-left font-semibold font-Nunito text-lg md:text-left'>Let's Create Something Extraordinary Together, Wherever You Are:</h1>
      <p className='text-left text-sm font-normal font-openSans text-neutral-700 md:text-left'>Whether you're looking to enhance your digital presence or embark on a new tech endeavor, I'm here to bring your ideas to life, no matter where you are in the world. As a remote worker, I offer the flexibility and expertise needed to turn your vision into reality, collaborating seamlessly across borders and time zones. Let's join forces to build innovative solutions that resonate with your audience and leave a lasting impression in the digital landscape. Together, we can create something truly extraordinary, no matter the distance.
</p>
      </div>
      <img src={imgg} className='' alt="" />
    </div>
  )
}

export default Fourthabout
