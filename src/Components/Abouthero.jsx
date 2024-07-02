import React from 'react';
import Heroimgg from './assets/Aboutherooimgg.png';

function Abouthero() {
    return (
      <div  className="h-[150px] sm:h-[200px] bg-cover bg-center pt-10 w-full"
    style={{ backgroundImage: `url(${Heroimgg})` }}>
 <h1 className="top-10 text-center text-[#111111] text-md lg:text-2xl font-bold font-Nunito">About</h1>
    </div>
    );
}
  
export default Abouthero;

