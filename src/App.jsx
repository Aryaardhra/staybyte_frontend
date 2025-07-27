import React from 'react'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import HotelReg from './components/HotelReg';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>  
    { !isOwnerPath && <Navbar /> }
    { false && <HotelReg /> }
    <div className="min-h-[70vh]">
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default App
