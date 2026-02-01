import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import HotelReg from './components/HotelReg';
import {Toaster} from "react-hot-toast";
import { useAppContext } from './context/AppContext';
//import { useUser, useAuth } from "@clerk/clerk-react";

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  const { showHotelReg } = useAppContext();
 {/* const { user } = useUser();
  const { getToken } = useAuth();

  useEffect(()=>{
    if(user){
      getToken().then((token)=>
console.log(token))
    }
  },[user]);

*/}
  return (
    <>  
    <Toaster />
    { !isOwnerPath && <Navbar /> }
    { showHotelReg && <HotelReg /> }
    <div className="min-h-[70vh]">
      <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default App
