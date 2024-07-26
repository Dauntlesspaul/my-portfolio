import React, {useEffect, useState} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate, Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, IconButton, createTheme, ThemeProvider } from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import ShoehavenImg from '../assets/images/shoehaven.png';
import GridnewsImg from '../assets/images/gridnews.png';
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { motion } from 'framer-motion';
import SideBar from "../component/SideBar";
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
const Projects = () => {
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
        <main >
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
          <div className="project_container project-page">
            <div className="timeline">
              <CasesOutlinedIcon className="neon-glow" />
              <div className="vertical"></div>
              <CircleOutlinedIcon sx={{ color: 'rgb(99, 99, 99)', fontSize: '15px' }} />
            </div>
            <div className="content">
                <div className="project_header">
                    <h2>Featured Projects</h2>
                    <hr />
                </div>
                 <p>Here are a few of my selected projects for you to explore</p>
                 <div className="project-md-query">
                  <motion.div 
                  id='project'
                  initial={{opacity:0, x:50}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{duration: 0.8, }}
                  style={{willChange: 'opacity, transform'}}
                  className="projects">
                    <div className="set-container">
                    <div className="project_img_container">
                        <motion.img 
                        src={ShoehavenImg} 
                        alt="shoe haven" 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }} />
                    </div>
                    <h2>Shoe Haven</h2>
                    <p>This e-commerce shoe shopping site simplifies finding and buying the perfect pair of shoes. Customers can easily browse various styles and brands, add items to their cart, and make secure purchases.</p>
                    </div>
                    <h2>PROJECT INFO</h2>
                    <hr className="seg_line2" />
                    <div className="project_info">
                      <h3>Year</h3>
                      <p>2024</p>
                    </div>
                    <hr className="seg_line2" />
                    <div className="project_info">
                      <h3>Type</h3>
                      <p>e-commerce</p>
                    </div>
                    <hr className="seg_line2" />
                    <div className="project_info">
                      <span>
                        <Button  
                        variant="outlined"
                        onClick={()=>window.open('https://shoe-haven.vercel.app/', '_blank', 'noopener,noreferrer')}
                        sx={{
                            color: 'rgb(100, 100, 239)',
                            borderColor: 'rgb(100, 100, 239)',
                            my: 1.5,
                            '&:hover':{
                              borderColor: 'rgb(100, 100, 239)'
                            }
                          }}>
                            LIVE DEMO <LinkIcon sx={{fontSize:"16px", ml:0.8}}/>
                            </Button>
                        </span>
                      <span>
                        <Button  
                          variant="outlined"
                          onClick={()=> navigate('/shoe-haven')}
                          sx={{
                              color: 'rgb(100, 100, 239)',
                              borderColor: 'rgb(100, 100, 239)',
                              my: 1.5,
                              '&:hover':{
                                borderColor: 'rgb(100, 100, 239)'
                              }
                            }}>
                              MORE INFO <InfoIcon sx={{fontSize:"16px", ml:0.8}}/>
                        </Button>
                        </span>
                    </div>
                  </motion.div>
                  <motion.div 
                  id='project2'
                  initial={{opacity:0, x:50}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{duration: 0.8, }}
                  style={{willChange: 'opacity, transform'}}
                  className="projects">
                    <div className="set-container">
                    <div className="project_img_container">
                        <motion.img 
                        src={GridnewsImg} 
                        alt="shoe haven" 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }} 
                        />
                    </div>
                    <h2>Grid News</h2>
                    <p>This news website simplifies staying informed. Users can easily browse various news categories, read the latest articles, and stay updated with breaking news alerts.</p>
                    </div>
                    <h2>PROJECT INFO</h2>
                    <hr className="seg_line2" />
                    <div className="project_info">
                      <h3>Year</h3>
                      <p>2024</p>
                    </div>
                    <hr className="seg_line2" />
                    <div className="project_info">
                      <h3>Type</h3>
                      <p>news website</p>
                    </div>
                    <hr className="seg_line2" />
                    <div className="project_info">
                      <span>
                        <Button  
                        variant="outlined"
                        sx={{
                            color: 'rgb(100, 100, 239)',
                            borderColor: 'rgb(100, 100, 239)',
                            my: 1.5,
                            '&:hover':{
                              borderColor: 'rgb(100, 100, 239)'
                            }
                          }}
                          onClick={()=>window.open('https://gridnews.onrender.com/', '_blank', 'noopener,noreferrer')}
                          >
                            LIVE DEMO <LinkIcon sx={{fontSize:"16px", ml:0.8}}/>
                            </Button>
                        </span>
                      <span>
                        <Button  
                          variant="outlined"
                          onClick={()=> navigate('/grid-news')}
                          sx={{
                              color: 'rgb(100, 100, 239)',
                              borderColor: 'rgb(100, 100, 239)',
                              my: 1.5,
                              '&:hover':{
                                borderColor: 'rgb(100, 100, 239)'
                              }
                            }}>
                              MORE INFO <InfoIcon sx={{fontSize:"16px", ml:0.8}}/>
                        </Button>
                        </span>
                    </div>
                  </motion.div>
                  </div>
              </div>
          </div>
          </div>
          </div>
        </main>
      </ThemeProvider>
    )
}

export default Projects