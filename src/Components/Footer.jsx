import React from 'react'
import Instagram from './assets/Instagram.svg'
import Behance from './assets/behance.svg'
import Whatsapp from './assets/Whatsapp.svg'
import Linkedin from './assets/linkedin.svg'

function Footer() {
  return (
    <div className='bg-cyan-100 px-6 py-20 grid grid-cols-1 justify-start md:px-10 '>
        <div className='grid gap-y-4 md:flex justify-start gap-x-4 items-center md:pl-2'>
            <h1 className='text-neutral-800 font-semibold text-base font-openSans '>Follow UICodeDave</h1>
            <div className='flex items-center gap-x-4'>
                <a href="https://www.instagram.com/uiux.pringles/"><img className='w-6 md:w-6' src={Instagram} alt="" /></a>
                <a href="https://wa.me/+2348144936800">
  <img className='w-6 md:w-6' src={Whatsapp} alt="WhatsApp" />
</a>
                <a href="http://www.linkedin.com/in/ayantoye-david-64615b249/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVMzu4kN%2FRnG8gi3XOhFrKg%3D%3D"><img className='w-6 md:w-6' src={Linkedin} alt="" /></a>
                <a href="https://www.behance.net/ayantoyedavid"><img className='w-6 md:w-6' src={Behance} alt="" /></a>
               
            </div>
        </div>
      
    </div>
  )
}

export default Footer
