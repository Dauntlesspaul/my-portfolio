import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { useEffect} from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import multi from './multi-step-form.png'
import cal from './calculator.png'
import gridnews from './gridnews2.png'
import {faAngleLeft,faAngleRight,faArrowUpRightFromSquare,faDownload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faXTwitter,faLinkedin ,faWhatsapp,faHtml5,faCss3Alt,faSass,faBootstrap,faSquareJs,faGitAlt,faReact} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import pdf from './Dauntless-dev-resume.pdf'
import pic from './my-pic.png'
library.add(faGithub,faAngleLeft,faXTwitter, faAngleRight, faLinkedin,faWhatsapp,faHtml5,faCss3Alt,faSass,faBootstrap,faSquareJs,faGitAlt,faReact,faArrowUpRightFromSquare,faDownload)
const Home=()=>{
   const [state, handleSubmit] = useForm("xayrolre");
    useEffect(()=>{
      
     document.getElementById('firstInd').classList.add('active')
    },[]) 
    
   useEffect(()=>{
   if (state.result) {
    alert('Message succesfully delivered to dauntless dev');
    document.getElementById("myform").reset();
  }
},[state.result]);

 const next=()=>{

  const x = document.getElementById('scroll-body').scrollLeft;

  if(x<627){
   
    document.getElementById('scroll-body').scrollLeft=x + 314

    } 
}

const prev=()=>{

const x = document.getElementById('scroll-body').scrollLeft;

if(x>0){
 document.getElementById('scroll-body').scrollLeft=x-314
}
} 

const removeClass = ()=>{
  document.getElementById('curtain').classList.remove('curtain_toggle')
  document.getElementById('container').classList.remove('blurry')
  document.getElementById('check').checked=false
}

const myScroll = ()=>{
  const x = document.getElementById('scroll-body').scrollLeft;
  const secondInd = document.getElementById('secondInd')
  const thirdInd = document.getElementById('thirdInd')
  const firstInd = document.getElementById('firstInd')

    if(x>=627){
      secondInd.classList.remove('active')
      thirdInd.classList.add('active')
      firstInd.classList.remove('active')
    }
   else if(x>313 && x<627){
      secondInd.classList.add('active')
      thirdInd.classList.remove('active')
      firstInd.classList.remove('active')
     }
    else{
      secondInd.classList.remove('active')
      thirdInd.classList.remove('active')
      firstInd.classList.add('active')
    } 
  
}
 return(<>
 <main>
  <div className="grouped">
 <div id="container" onClick={removeClass} className="container">
 <div className="animation_container">
 <div className="box">

<div className="title">
    <span className="block"></span>
    <h1>Dauntless dev<span></span></h1>
</div>

<div className="role">
    <div className="block"></div>
    <p>Frontend developer</p>
</div>

</div>
  </div>
 <div className="center_div1">
      <img src={pic} alt="my profile pic"/>
 </div>
 <div className="contact_layout">
  <div className="flex">
 <a href={pdf} target="_blank" rel="noopener noreferrer"> <div className="resume">Resumé &nbsp; <FontAwesomeIcon icon="fa-solid fa-download" /></div></a>
   <div class="contact_container">
    <Link target="_blank" rel="noopener noreferrer" to="https://github.com/Dauntlesspaul"><FontAwesomeIcon icon="fa-brands fa-github" className="github" /></Link>
    <Link target="_blank" rel="noopener noreferrer" to="https://twitter.com/WitsPaul"><FontAwesomeIcon icon="fa-brands fa-x-twitter" className="x" /></Link>
    <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/oladipupo-paul" ><FontAwesomeIcon icon="fa-brands fa-linkedin" className="ldn" /></Link>
    <Link target="_blank" rel="noopener noreferrer" to="https://wa.link/6e51su"><FontAwesomeIcon icon="fa-brands fa-whatsapp" className="whatsapp" /></Link>
    <div id="about" ></div>
    </div>
   </div>
  </div>
  <div className="center_div">
    <div className="about_layout">
    <fieldset className="about_fieldset">
     <legend>&nbsp; About Me&nbsp;</legend>
     <span>
My name is Oladipupo Paul Rotimi, also known as dauntless. I graduated with First Class honors in Industrial Chemistry from the prestigious University of Ilorin, Kwara State, Nigeria.
My venture into front-end development stems from my desire to blend creativity with technology. I excel at translating static designs into dynamic web experiences through meticulous coding, ensuring seamless functionality across various devices and browsers. Skilled in HTML, CSS, Tailwind CSS, JavaScript, and React.js framework. I also leverage tools like Sass and Git to optimize development workflows and to encourage team collaboration.</span>
        </fieldset>
    <div id="skill" ></div>
    </div>
  </div>
  <div className="center_div">
  <div className="skills_layout">
    <fieldset className="skill_fieldset">
        <legend>&nbsp; My Skills&nbsp;</legend>
        <div className="grid_container">
        <div className="boots">
        <svg className="skills_icon" fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/>
        </svg>
          <br/><span>Tailwind Css</span></div>
        <div className="js"><FontAwesomeIcon className="skills_icon"  icon="fa-brands fa-square-js" /><br/><span>JavaScript</span></div>
        <div className="react"><FontAwesomeIcon className="skills_icon"  icon="fa-brands fa-react" /><br/><span>React.js</span></div>
        <div className="git"><FontAwesomeIcon className="skills_icon"  icon="fa-brands fa-git-alt" /><br/><span>Git</span></div>
        <div className="html"><FontAwesomeIcon className="skills_icon"  icon="fa-brands fa-html5" /><br/><span>Html</span></div>
        <div className="css"><FontAwesomeIcon className="skills_icon"  icon="fa-brands fa-css3-alt" /><br/><span>Css</span></div>
        <div className="sass"><FontAwesomeIcon className="skills_icon"  icon="fa-brands fa-sass" /><br/><span>Sass</span></div>
        </div>
    </fieldset>
    <div id="project" ></div>
  </div>
  </div>

  <div className="center_div">
  <div className="project_layout">
    <fieldset className="project_fieldset">
        <legend>&nbsp; My Projects&nbsp;</legend>
    
        <div id="scroll-body" onScroll={myScroll} className="scroll-body">
            <div className="block2"><div className="img-span"> <div className="img-set"><img src={gridnews} alt="gridnews"/></div></div>
              <Link to="https://gridnews.onrender.com/" target="_blanck">
                <div className="text-span">
                <span><b>BLOG SITE</b><br/>Gridnews is a news platform featuring responsive design and clear navigation, allowing users to effortlessly explore content via organized structures and user-friendly menus. </span>
                <div className="visit_link"><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></div>
                </div>
              </Link>
            </div>
            <div className="block2"><div className="img-span"> <div className="img-set"><img src={multi} alt="multi-form"/></div></div>
              <Link to="https://dauntlesspaul.github.io/Multi-step-form/" target="_blanck">
              <div className="text-span">
                <span><b>SUBSCRIPTION FORM</b><br/>This is a multi-step subscription form craftily designed to offer flexibility in plan selection, ensuring a smooth user experience across different devices</span>
                <div className="visit_link"><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></div>
                </div>
              </Link> 
            </div>
            <div className="block2"> <div className="img-span"> <div className="img-set"><img src={cal} alt="calc"/></div></div>
              <Link to="https://numerical-calculator.netlify.app/" target="_blanck">
              <div className="text-span">
                <span><b>NUMERICAL CALCULATOR </b><br/> This  design features various themes with visually appealing user interface. Users should be able to switch between different themes easily to personalize their experience</span>
                <div className="visit_link"><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></div>
                </div>
              </Link>
            </div>
            
        </div>
    </fieldset>
    <div id="contact" ></div>
  </div>
</div>
<div className="carousel-set">
  <div className="carousel-indicator"> 
    <span id="firstInd"></span>
    <span id="secondInd"></span>
    <span id="thirdInd"></span>
  </div>
</div>

<div className="controll-set">
 <div className="controller">
  <span onClick={prev} ><FontAwesomeIcon icon="fa-solid fa-angle-left" /></span>
  <span onClick={next}><FontAwesomeIcon icon="fa-solid fa-angle-right" /></span>
 </div>
</div>
<span id="paul"></span>
<div className="center_div">
  <div className="writeme_layout">
    <form id='myform' method="post" onSubmit={handleSubmit} autoComplete="on">
        <fieldset className="contact_fieldset">
        <legend>&nbsp; Contact Me&nbsp;</legend>
        <div className="form_grouped">
        <label htmlFor="my-email">My Email</label>
        <input type="email" id="my-email" name="my-email" value="Dauntlesspaulwit@gmail.com" readOnly/>
        <label htmlFor="your-name">Your Name</label>
        <input type="text" id="your-name" name="your-name" placeholder="Enter your Name" required/>
        <label htmlFor="your-email">Your Email</label>
        <input type="email" id="your-email" name="your-email" placeholder="Enter your Email address" required/>
        <ValidationError 
        prefix="Email" 
        field="your-email"
        errors={state.errors}
      />
        <textarea
         id="message"
        name="message"
         placeholder="I'm eager to hear from you and open to collaborations" required/>

         <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

        <input  type="submit" disabled={state.submitting}/>
        </div>
        </fieldset>
    </form>
    </div>
      </div>
    </div>
  </div>
 </main>

 </>)   
}
export default Home