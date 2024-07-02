import React from 'react'
import imagee from './assets/Projectsherooo.png'

function Projectshero() {
  return (
    <div  className="h-[150px] sm:h-[200px] bg-cover bg-center pt-10 w-full"
    style={{ backgroundImage: `url(${imagee})` }}>
 <h1 className="top-10 text-center text-[#111111] text-md lg:text-2xl font-bold font-Nunito">Projects</h1>
    </div>
  )
}

export default Projectshero
