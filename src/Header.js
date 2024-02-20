import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCircleHalfStroke} from '@fortawesome/free-solid-svg-icons'
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import logo from './my-logo.png'
library.add(faBars,faCircleHalfStroke,faChevronRight)
const Header=()=>{

const curtainMenu = ()=>{ 
    document.getElementById('curtain').classList.toggle('curtain_toggle')
    document.getElementById('container').classList.toggle('blurry')
  }
const theme = ()=>{
 const bg_color = getComputedStyle(document.documentElement).getPropertyValue('--body-bg');
 const dom = document.documentElement;
 if(bg_color==='#0d1117'){
    dom.style.setProperty('--body-bg','#fafafa')
    dom.style.setProperty('--header-footerbg','#ffffff')
    dom.style.setProperty('--layout','#ffffff')
    dom.style.setProperty('--body-text','black')
    dom.style.setProperty('--icon-bg','rgb(3, 3, 46)')
    dom.style.setProperty('--icon-shadow','rgb(192, 192, 192)')
    dom.style.setProperty('--dauntless-color','rgb(3, 3, 46)')
    dom.style.setProperty('--header-footercolor','rgb(3, 3, 46)')
    dom.style.setProperty('--headericon-shadow','drop-shadow(5px 5px 10px rgb(192, 192, 192))')
    dom.style.setProperty('--curtain-bg','#151b24')
 }
 else{ 
    dom.style.setProperty('--body-bg','#0d1117')
    dom.style.setProperty('--header-footerbg','#151b24')
    dom.style.setProperty('--layout','#151b24')
    dom.style.setProperty('--body-text','hsl(0,0%,100%)')
    dom.style.setProperty('--icon-bg','aliceblue')
    dom.style.setProperty('--icon-shadow','rgb(68, 68, 223)')
    dom.style.setProperty('--dauntless-color','rgb(68, 68, 223)')
    dom.style.setProperty('--header-footercolor',' aliceblue ')
    dom.style.setProperty('--headericon-shadow','drop-shadow(5px 5px 10px rgb(68, 68, 223))') 
    dom.style.setProperty('--curtain-bg','#f6f8fa')
 }
}
const removeClass = ()=>{
    document.getElementById('curtain').classList.remove('curtain_toggle')
    document.getElementById('container').classList.remove('blurry')
}
 

return(<>
<div className="myHeader">
<div className="headerGrid">
    <div className="logo"><img src={logo} alt="mylogo"/></div>
    <div className="brand"></div>
    <div className="switch"><FontAwesomeIcon onClick={theme} className="icon_size" icon="fa-solid fa-circle-half-stroke" /></div>
    <div id='menu_bar' className="menu"><FontAwesomeIcon onClick={curtainMenu} className="icon_size" icon="fa-solid fa-bars"  /></div>
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
