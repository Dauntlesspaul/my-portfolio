import React from "react";
import Header from './Header'
import Footer from './Footer'
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
const Layout=()=>{
 useEffect(()=>{
  setTimeout(()=>{
 // document.getElementById('loader').style.display="none";
  //document.getElementById('load_page').style.opacity="1"
  //document.body.style.position="relative"
  },3000)
 },[])
  return (<>
  <div id="loader" className="centerAnimation">
    <div className="animation_bg"><div className="myloader"></div></div>
    </div>
   <div id='load_page'>
   <Header/>
   <Outlet/>
   <Footer/>
   </div>
  </>)  
}
export default Layout