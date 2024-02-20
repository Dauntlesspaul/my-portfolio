import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { useEffect,useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import logo from './my-logo.png'
import multi from './multi-step-form.png'
import cal from './calculator.png'
import { faCircleChevronRight,faCircleChevronLeft,faArrowUpRightFromSquare,faDownload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faXTwitter,faLinkedin ,faWhatsapp,faHtml5,faCss3Alt,faSass,faBootstrap,faSquareJs,faGitAlt,faReact} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
library.add(faGithub,faXTwitter,faLinkedin,faWhatsapp,faHtml5,faCss3Alt,faSass,faBootstrap,faSquareJs,faGitAlt,faReact,faCircleChevronRight,faCircleChevronLeft,faArrowUpRightFromSquare,faDownload)
const Home=()=>{
   const [state, handleSubmit] = useForm("xayrolre");
    const [count,setCount] = useState(0);
    useEffect(()=>{
      setInterval(()=>{
          document.getElementById('animate').innerHTML="<span>I</span><span>'</span><span>m</span>&nbsp;<span>d</span><span>a</span><span>u</span><span>n</span><span>t</span><span>l</span><span>e</span><span>s</span><span>s</span>&nbsp;<span>d</span><span>e</span><span>v</span>"
  
      },4000
     )
    },[]) 
    
   useEffect(()=>{
   if (state.result) {
    alert('Message succesfully delivered to dauntless dev');
    document.getElementById("myform").reset();
  }
},[state.result]);

 const next=()=>{
    setCount((count)=>{
       return  count+=1}      
) 
  document.getElementById('left').style.visibility="visible";
  document.getElementById('img_grid').children[count+1].style.display="block";
  document.getElementById('img_grid').children[count].style.display="none";
  const number = document.getElementById('img_grid').children.length;
  if(number===count+3){
    document.getElementById('right').style.visibility="hidden"; 
  }
    } 
const prev=()=>{
    setCount((count)=>{
       return  count-=1}
)
document.getElementById('img_grid').children[count].style.display="none";
document.getElementById('img_grid').children[count-1].style.display="block";
if(count===1){
    document.getElementById('left').style.visibility="hidden";
}
document.getElementById('right').style.visibility="visible";
} 

const removeClass = ()=>{
  document.getElementById('curtain').classList.remove('curtain_toggle')
  document.getElementById('container').classList.remove('blurry')
}
 return(<>
 <main>
  <div className="grouped">
 <div id="container" onClick={removeClass} className="container">
<div className="intro-img"><img src={logo} alt="mylogo"/></div>
 <div className="animation_container">
  <div id="animate" className="animate one">
  <span>I</span><span>'</span><span>m</span>&nbsp;<span>d</span>
  <span>a</span><span>u</span><span>n</span><span>t</span><span>l</span><span>e</span><span>s</span><span>s</span>&nbsp;<span>d</span><span>e</span><span>v</span>
  </div>
  </div>
 <div className="center_div"><h2>I am a proficient Front-end Developer, vast in creating visual and interactive elements of websites and web applications with seamseamless and engaging user experience </h2></div>
 <div className="contact_layout">
  <div className="flex">
  <div className="resume">Resumé &nbsp; <FontAwesomeIcon icon="fa-solid fa-download" /></div>
   <div class="contact_container">
    <Link to="https://github.com/Dauntlesspaul"><FontAwesomeIcon icon="fa-brands fa-github" className="github" /></Link>
    <Link to="https://twitter.com/WitsPaul"><FontAwesomeIcon icon="fa-brands fa-x-twitter" className="x" /></Link>
    <FontAwesomeIcon icon="fa-brands fa-linkedin" className="ldn" />
    <Link to="https://wa.link/6e51su"><FontAwesomeIcon icon="fa-brands fa-whatsapp" className="whatsapp" /></Link>
    <div id="about" ></div>
    </div>
   </div>
  </div>
  <div className="center_div">
    <div className="about_layout">
    <fieldset className="about_fieldset">
     <legend>&nbsp; About Me&nbsp;</legend>
     <span>My name is Oladipupo Paul Rotimi, popularly known as dauntless. I am a First Class graduate in Industrial Chemistry from the esteemed University of Ilorin, Kwara State, Nigeria.

        My journey into front-end development was sparked by my passion for merging creativity with technology. I excel in bringing static designs to life by employing clean and efficient code, always aiming for flawless precision and seamless functionality across diverse devices and browsers. Proficient in HTML, CSS, and JavaScript, I stay abreast of the latest trends and best practices in front-end development.

        My expertise extends to the React.js framework, complemented by my adeptness in utilizing tools such as Sass and Git to streamline the development process and foster effective collaboration within teams.</span>
        </fieldset>
    <div id="skill" ></div>
    </div>
  </div>
  <div className="center_div">
  <div className="skills_layout">
    <fieldset className="skill_fieldset">
        <legend>&nbsp; My Skills&nbsp;</legend>
        <div className="grid_container">
        <div className="boots"><FontAwesomeIcon className="skills_icon" icon="fa-brands fa-bootstrap"/><br/><span>Bootstrap</span></div>
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
        <div id="img_grid" className="img_grid">
            <div className="temp_bg">
                <div className="img-set"><img src={multi} alt="dove1"/></div>
                <Link to="https://dauntlesspaul.github.io/Multi-step-form/" target="_blanck"><div>This subscription form is user-friendly and responsive, featuring a multi-step design that enhances clarity and efficiency. It offers flexibility in plan selection, ensuring a smooth user experience across different devices</div>
                <div className="visit_link"><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></div></Link>
            </div>
            <div className="temp_bg">
            <div className="img-set"><img src={cal} alt="dove1"/></div>
                <Link to="https://dauntlesspaul.github.io/Front-end-Mentor-challenge-Calculator-app/" target="_blanck"><div>Numerical calculator designed with an intuitive and visually appealing user interface that accommodates various themes. Users should be able to switch between different themes easily to personalize their experience</div>
                <div className="visit_link"><FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></div></Link>
            </div>
            <div className="controller"><button id="left" className="left"><FontAwesomeIcon className="chevron-left" onClick={prev} icon="fa-solid fa-circle-chevron-left" /></button><button id="right" className="right"><FontAwesomeIcon className="chevron-right" onClick={next} icon="fa-solid fa-circle-chevron-right" /></button></div>
        </div>
    </fieldset>
    <div id="contact" ></div>
  </div>
</div>
<div className="center_div">
  <div className="writeme_layout">
    <form id='myform' method="post" onSubmit={handleSubmit} autoComplete="on">
        <fieldset className="contact_fieldset">
        <legend>&nbsp; Contact Me&nbsp;</legend>
        <div className="form_grouped">
        <label for="my-email">My Email</label>
        <input type="email" id="my-email" name="my-email" value="Dauntlesspaulwit@gmail.com" readOnly/>
        <label for="your-name">Your Name</label>
        <input type="text" id="your-name" name="your-name" placeholder="Enter your Name" required/>
        <label for="your-email">Your Email</label>
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