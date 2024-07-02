import React from 'react'
import whatsappp from './assets/Whatsapp Contact.svg'
import instagramm from './assets/Instagram Contact.svg'
import linkedinn from './assets/Linkedin contact.svg'
import behancee from './assets/Behance Contact.svg'

function Contactbody() {
  return (
    <div className='px-4 py-12 bg-[#F3F9F6] grid grid-cols-1 gap-y-12 md:flex md:gap-x-12 lg:gap-x-24 md:justify-center  '> 
      <a href="https://wa.me/+2348144936800"><div className='justify-center grid text-center gap-y-2'>
        <img className='mx-auto size-10' src={whatsappp}  alt="" />
        <div className='grid justify-center gap-y-[4px]'>
            <h2 className='font-semibold font-openSans text-[#222222] text-[16px]'>WhatsApp</h2>
            <p className='font-medium font-openSans text-[#444444] text-[14px]'>+234 814 493 6800</p>
        </div>
      </div></a>

      <a href="https://www.instagram.com/uiux.pringles/"><div className='justify-center grid text-center gap-y-2'>
        <img className='mx-auto size-10' src={instagramm}  alt="" />
        <div className='grid justify-center gap-y-[4px]'>
            <h2 className='font-semibold font-openSans text-[#222222] text-[16px]'>Instagram</h2>
            <p className='font-medium font-openSans text-[#444444] text-[14px] text-center'>uiux.pringles</p>
        </div>
      </div></a>


      <a href="http://www.linkedin.com/in/ayantoye-david-64615b249/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BVMzu4kN%2FRnG8gi3XOhFrKg%3D%3D"><div className='justify-center grid text-center gap-y-2'>
        <img className='mx-auto size-10' src={linkedinn}  alt="" />
        <div className='grid justify-center gap-y-[4px]'>
            <h2 className='font-semibold font-openSans text-[#222222] text-[16px]'>LinkedIn</h2>
            <p className='font-medium font-openSans text-[#444444] text-[14px] text-center'>Ayantoye David</p>
        </div>
      </div></a>


      <a href="https://www.behance.net/ayantoyedavid"><div className='justify-center grid text-center gap-y-2'>
        <img className='mx-auto size-10' src={behancee}  alt="" />
        <div className='grid justify-center gap-y-[4px]'>
            <h2 className='font-semibold font-openSans text-[#222222] text-[16px]'>Behance</h2>
            <p className='font-medium font-openSans text-[#444444] text-[14px] text-center'>uiux.pringles</p>
        </div>
      </div></a>
    </div>
  )
}

export default Contactbody
