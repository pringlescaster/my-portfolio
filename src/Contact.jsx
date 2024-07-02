import React from 'react'
import Contactnav from './Components/Contactnav'
import Contacthero from './Components/Contacthero'
import Contactbody from './Components/Contactbody'
import Footer from "./Components/Footer"


function Contact() {
  return (
    <div>
        {/* <Contactnav></Contactnav> */}
        <Contacthero></Contacthero>
        <Contactbody></Contactbody>
        <Footer></Footer>
    </div>
  )
}

export default Contact
