import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Second from "./Components/Second"
import Third from "./Components/Third"
import Fourth from "./Components/Fourth"
import Footer from "./Components/Footer"

function Home() {
  return (
    <div>
        <Navbar></Navbar>
   <Hero></Hero> 
   <Second></Second>
   <Third></Third>
   <Fourth></Fourth>
   <Footer></Footer>
    </div>
  )
}

export default Home
