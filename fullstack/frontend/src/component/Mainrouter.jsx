import React from 'react'
import { Outlet } from 'react-router-dom'

import Contacts from './Contacts'
import Footer from './Footer'
import Navbar from './Navbar'

const Mainrouter = () => {
  return (
    <div>
        <Contacts/>
      <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Mainrouter