import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Button, createTheme,IconButton, ThemeProvider } from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { motion } from 'framer-motion';
import SideBar from "../component/SideBar";
import PDF from '../assets/files/CV.pdf'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const theme = createTheme({
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            '&.neon-glow': {
              color: 'white',
              filter: 'drop-shadow(0 0 5px #00e6e6) drop-shadow(0 0 10px #00e6e6) drop-shadow(0 0 20px #00e6e6) drop-shadow(0 0 40px #00e6e6)',
              '&:hover': {
                filter: 'drop-shadow(0 0 10px #00e6e6) drop-shadow(0 0 20px #00e6e6) drop-shadow(0 0 30px #00e6e6) drop-shadow(0 0 50px #00e6e6)',
              },
            },
          },
        },
      },
    },
  });
const About = () => {
    const [isChecked, setChecked] = useState(false);
   const navigate = useNavigate()
    const handleChange = () => {
      setChecked(prevState => !prevState);
    };
  
    useEffect(() => {
      const checkWindowWidth = () => {
        if (window.innerWidth >= 1280) {
          setChecked(true);
        } else {
          setChecked(false);
        }
      };
  
      checkWindowWidth();
      window.addEventListener('resize', checkWindowWidth);
  
      return () => {
        window.removeEventListener('resize', checkWindowWidth);
      };
    }, []);
    const handleClick = () =>{
      if (window.innerWidth < 1280) {
      setChecked(false)
      }
    }
    return (
        <ThemeProvider theme={theme}>
        <main>
        <SideBar isChecked={isChecked}/>
        <div className="main-container"> 
          <div
            className="header_bar"
          >
            <div className="header_content">
              <input 
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
               role="button" 
               aria-label="Display the menu" 
               className="menu" />
              <div className="social">
              <Link target="_blank" rel="noopener noreferrer" to="https://twitter.com/WitsPaul">
              <XIcon sx={{ color: 'white', mx: 0.3 }} />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" to="https://www.linkedin.com/in/oladipupo-paul" >
              <LinkedInIcon sx={{ color: 'white', mx: 0.3 }} />
              </Link>
              <Link target="_blank" rel="noopener noreferrer" to="https://github.com/Dauntlesspaul">
              <GitHubIcon sx={{ color: 'white', mx: 0.3 }} />
              </Link>
              <a target="_blank" rel="noopener noreferrer" href="mailto:dauntlesspaulwit@gmail.com">
              <EmailIcon sx={{ color: 'white', mx: 0.3 }} />
              </a>
              </div>
            </div>
          </div>
          <div onClick={handleClick}>
          <div className="animation_container_p">
            <div className="box-p">
              <div className="title-p">
                <span className="block-p"></span>
                <h1>Dauntless dev<span></span></h1>
              </div>
              <div className="role-p">
                <div className="block-p"></div>
                <p>Full-Stack <br />Web developer</p>
              </div>
            </div>
          </div>
          <hr />
          <IconButton
            sx={{
              backgroundColor: 'gray',
              marginBottom:'-20px',
              '&:hover':{
                backgroundColor: 'gray'
                }
            } 
          }
          onClick={()=> navigate(-1)}
            >
            <ArrowBackIosNewIcon  sx={{color: 'black', fontSize: "14px", fontWeight: '800'}}/>
          </IconButton>
          <div className="project_container about-page">
            <div className="timeline">
              <PermIdentityIcon className="neon-glow" />
              <div className="vertical"></div>
              <CircleOutlinedIcon sx={{ color: 'rgb(99, 99, 99)', fontSize: '15px' }} />
            </div>
            <div className="content">
                <div className="project_header">
                    <h2>About Me</h2>
                    <hr />
                </div>
                <motion.div 
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ duration: 0.8 }}
                style={{ willChange: 'opacity, transform' }}
                className="about-me">
                 <p>My name is Oladipupo Paul Rotimi, also known as Dauntless. I graduated with First Class honors in Industrial Chemistry from the prestigious University of Ilorin, Kwara State, Nigeria.
                 My journey into full stack web development is driven by a passion for merging innovative solutions with technological advancements. I specialize in the MERN stack, excelling at creating dynamic web experiences by developing robust backend systems and translating static designs into interactive front-end interfaces. Skilled in HTML, CSS, Tailwind CSS, JavaScript, and the React.js framework for front-end development, I also have expertise in backend technologies such as Node.js, Express.js, and MongoDB.</p>
                 <p>  Collaboration excites me, and I excel in transforming ideas into reality through teamwork and innovation. If you require a dedicated and detail-oriented web developer for your team or project, I am the ideal candidate. Let us connect and bring your vision to life.</p>
                 <h2>Hobbies</h2>
                 <ul>
                  <li>Paying Chess</li>
                  <li>Playing JavaScript Trivia</li>
                  <li>Reading</li>
                  <li>participating in hackathons</li>
                 </ul>
                 <h2>Download Resume</h2>
                 <a href={PDF} style={{ textDecoration: 'none'}}  rel="noreferrer" target="_blank">
                 <Button
                  variant="outlined"
                  sx={{
                    color: 'rgb(100, 100, 239)',
                    borderColor: 'rgb(100, 100, 239)',
                    my: 1.5,
                    '&:hover': {
                      borderColor: 'rgb(100, 100, 239)',
                    }
                  }}
                >
                  Resume
                </Button>
                </a>
                 </motion.div>
                 
              </div>
          </div>
          </div>
          </div>
        </main>
      </ThemeProvider>
    )
}

export default About