import React from "react";
import { useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import logo from './my-logo.png'
library.add(faBars,faCircleHalfStroke,faChevronRight)
const Header=()=>{

useEffect(()=>{
const verify = window.localStorage.getItem('checkbox')
const x = window.localStorage.getItem('checkbox')
 const dom = document.documentElement;
if(verify == null){
    window.localStorage.setItem('checkbox','true')  
}
else{

 if(x === 'true'){
    dom.style.setProperty('--body-bg','#ffffff')
    dom.style.setProperty('--header-footerbg','linear-gradient(180deg,rgb(247, 245, 243),rgb(252, 251, 251))')
    dom.style.setProperty('--layout','rgb(252, 251, 251)')
    dom.style.setProperty('--body-text','black')
    dom.style.setProperty('--icon-bg','rgb(3, 3, 46)')
    dom.style.setProperty('--dauntless-color','rgb(54, 54, 174)')
    dom.style.setProperty('--headericon-shadow','drop-shadow(2px 2px 5px rgb(192, 192, 192))')
    dom.style.setProperty('--curtain-bg','#151b24')
    dom.style.setProperty('--skills-icon','#151b24')
    dom.style.setProperty('--header-footercolor','#151b24')
    dom.style.setProperty('--field-set','silver')
    dom.style.setProperty('--inner-layer','#fff')
    dom.style.setProperty('--inner-outer-shadow','1px 2px 4px rgb(199, 197, 197) , 1px 2px 10px rgb(151, 150, 150) inset')
    dom.style.setProperty('--inner-shadow','1px 2px 5px rgb(162, 162, 162)')
    dom.style.setProperty('--inner-outer-shadow-footer','1px -2px 4px rgb(199, 197, 197) , 1px -2px 10px rgb(151, 150, 150) inset')
 }
 else{ 
    dom.style.setProperty('--body-bg','#0d1117')
    dom.style.setProperty('--header-footerbg','#0d1117')
    dom.style.setProperty('--header-footercolor','aliceblue')
    dom.style.setProperty('--layout','#0d1117')
    dom.style.setProperty('--body-text','hsl(0,0%,100%)')
    dom.style.setProperty('--icon-bg','aliceblue')
    dom.style.setProperty('--dauntless-color','rgb(68, 68, 223)')
    dom.style.setProperty('--header-footercolor',' aliceblue ')
    dom.style.setProperty('--headericon-shadow','drop-shadow(2px 2px 5px rgb(68, 68, 223))') 
    dom.style.setProperty('--curtain-bg','#f6f8fa')
    dom.style.setProperty('--skills-icon','aliceblue')
    dom.style.setProperty('--field-set','rgb(76, 76, 245)')
    dom.style.setProperty('--inner-layer','#12161b')
    dom.style.setProperty('--inner-outer-shadow','1px 2px 4px rgb(66, 66, 66) , 1px 3px 10px #030202 inset')
    dom.style.setProperty('--inner-shadow','1px 1px 2px rgb(103, 103, 103)')
    dom.style.setProperty('--inner-outer-shadow-footer','1px -2px 4px rgb(66, 66, 66) , 1px 3px 10px #030202 inset')
 }
}
},[])

const curtainMenu = ()=>{ 
    document.getElementById('curtain').classList.toggle('curtain_toggle')
    document.getElementById('container').classList.toggle('blurry')
  }

const theme = ()=>{
const x = window.localStorage.getItem('checkbox')
 const dom = document.documentElement;
 if(x === 'false'){
    dom.style.setProperty('--body-bg','#ffffff')
    dom.style.setProperty('--header-footerbg','linear-gradient(180deg,rgb(247, 245, 243),rgb(252, 251, 251))')
    dom.style.setProperty('--layout','rgb(252, 251, 251)')
    dom.style.setProperty('--body-text','black')
    dom.style.setProperty('--icon-bg','rgb(3, 3, 46)')
    dom.style.setProperty('--dauntless-color','rgb(54, 54, 174)')
    dom.style.setProperty('--headericon-shadow','drop-shadow(2px 2px 5px rgb(192, 192, 192))')
    dom.style.setProperty('--curtain-bg','#151b24')
    dom.style.setProperty('--skills-icon','#151b24')
    dom.style.setProperty('--header-footercolor','#151b24')
    dom.style.setProperty('--field-set','silver')
    dom.style.setProperty('--inner-layer','#fff')
    dom.style.setProperty('--inner-outer-shadow','1px 2px 4px rgb(199, 197, 197) , 1px 2px 10px rgb(151, 150, 150) inset')
    dom.style.setProperty('--inner-shadow','1px 2px 5px rgb(162, 162, 162)')
    dom.style.setProperty('--inner-outer-shadow-footer','1px -2px 4px rgb(199, 197, 197) , 1px -2px 10px rgb(151, 150, 150) inset')
 
 }
 else{ 
    dom.style.setProperty('--body-bg','#0d1117')
    dom.style.setProperty('--header-footerbg','#0d1117')
    dom.style.setProperty('--header-footercolor','aliceblue')
    dom.style.setProperty('--layout','#0d1117')
    dom.style.setProperty('--body-text','hsl(0,0%,100%)')
    dom.style.setProperty('--icon-bg','aliceblue')
    dom.style.setProperty('--dauntless-color','rgb(68, 68, 223)')
    dom.style.setProperty('--header-footercolor',' aliceblue ')
    dom.style.setProperty('--headericon-shadow','drop-shadow(2px 2px 5px rgb(68, 68, 223))') 
    dom.style.setProperty('--curtain-bg','#f6f8fa')
    dom.style.setProperty('--skills-icon','aliceblue')
    dom.style.setProperty('--field-set','rgb(76, 76, 245)')
    dom.style.setProperty('--inner-layer','#12161b')
    dom.style.setProperty('--inner-outer-shadow','1px 2px 4px rgb(66, 66, 66) , 1px 3px 10px #030202 inset')
    dom.style.setProperty('--inner-shadow','1px 1px 2px rgb(103, 103, 103)')
    dom.style.setProperty('--inner-outer-shadow-footer','1px -2px 4px rgb(66, 66, 66) , 1px 3px 10px #030202 inset')
 }
 x === 'true' ? window.localStorage.setItem('checkbox','false') : window.localStorage.setItem('checkbox','true')
}
const removeClass = ()=>{
    document.getElementById('curtain').classList.remove('curtain_toggle')
    document.getElementById('container').classList.remove('blurry')
    document.getElementById('check').checked=false
}
 

return(<>
<div className="myHeader">
<div className="headerGrid">
    <div className="logo"><img src={logo} alt="mylogo"/></div>
    <div className="brand"></div>
    <div className="switch"><FontAwesomeIcon onClick={theme} className="icon_size" id="theme-icon" icon="fa-solid fa-circle-half-stroke" /></div>
    <div id='menu_bar'  className="menu"><label htmlFor="check">
      <input onClick={curtainMenu} type="checkbox" id="check"/> 
      <span></span>
      <span></span>
      <span></span>
    </label></div>
</div>
<div className="desktopheaderGrid">
    <div className="dlogo"><img src={logo} alt="mylogo"/></div>
    <div className="about"><a onClick={removeClass} href="#about"><span>About</span></a></div>
    <div className="skills"><a onClick={removeClass} href="#skill"><span>Skills</span></a></div>
    <div className="projects"><a onClick={removeClass} href="#project"><span>Project</span></a></div>
    <div className="contact"><a onClick={removeClass} href="#contact"><span>Contact</span></a></div>
    <div className="dswitch"><FontAwesomeIcon onClick={theme} className="icon_size" icon="fa-solid fa-circle-half-stroke" /></div>
</div>
</div>
<div id='curtain' className="curtain_menu">
    <nav>
     <a onClick={removeClass} href="#about"><div className="slide_link"><span>About</span><FontAwesomeIcon icon="fa-solid fa-chevron-right" style={{fontSize:'17px'}}/></div></a>
     <a onClick={removeClass} href="#skill"><div className="slide_link"><span>Skills</span><FontAwesomeIcon icon="fa-solid fa-chevron-right" style={{fontSize:'17px'}} /></div></a>
     <a onClick={removeClass} href="#project"><div className="slide_link"><span>Projects</span><FontAwesomeIcon icon="fa-solid fa-chevron-right" style={{fontSize:'17px'}} /></div></a>
     <a onClick={removeClass} href="#contact"><div className="slide_link"><span>Contact</span><FontAwesomeIcon icon="fa-solid fa-chevron-right" style={{fontSize:'17px'}}/></div></a>
    </nav>
</div>
</>
)
}
export default Header
