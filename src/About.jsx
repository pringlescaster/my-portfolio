import React from 'react'
import Aboutnavbar from './Components/Aboutnavbar'
import Abouthero from './Components/Abouthero'
import Secondabout from './Components/Secondabout'
import Thirdabout from './Components/Thirdabout'
import Fourthabout from './Components/Fourthabout'
import Footer from './Components/Footer'

function About() {
  return (
    <div>
   {/* <Aboutnavbar></Aboutnavbar> */}
   <Abouthero></Abouthero>
   <Secondabout></Secondabout>
  <Thirdabout></Thirdabout>
  <Fourthabout></Fourthabout>
  <Footer></Footer>
    </div>
  )
}

export default About
