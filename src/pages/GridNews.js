import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, IconButton, ThemeProvider } from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import GridnewsImg from '../assets/images/gridnews.png';
import Gr1 from '../assets/images/gr1.png';
import Gr2 from '../assets/images/gr2.png';

import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SideBar from "../component/SideBar";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../slick-custom.css'
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
  const images = [
    GridnewsImg,
    Gr1,
    Gr2,
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }
const GridNews = () => {
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
          <div className="project_container project-page">
            <div className="timeline">
              <CasesOutlinedIcon className="neon-glow" />
              <div className="vertical"></div>
              <CircleOutlinedIcon sx={{ color: 'rgb(99, 99, 99)', fontSize: '15px' }} />
            </div>
            <div className="info-content">
                <div className="project_header">
                    <h2>Featured Projects</h2>
                    <hr />
                </div>
                <p>More info about Grid news</p>
                <div className="info-query">
                <div className="carousel-set">
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div  key={index}>
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{ width: '100%', height: 'auto' }}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </Slider>
                </div>
                 <div className="info">
                 <h2>Grid News</h2>
                 <p>This news website simplifies staying informed. Users can easily browse various news categories, read the latest articles, and stay updated with breaking news alerts.</p>
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
                    <h2>TOOLS USED</h2>
                    <hr className="seg_line2" />
                    <h3> 👉Sass</h3>
                    <h3> 👉Ejs</h3>
                    <h3> 👉Mongo Database</h3>
                    <hr className="seg_line2" />
                    <h2>FEATURES</h2>
                    <hr className="seg_line2" />
                    <h3>📌 Admin Login</h3>
                    <h3>📌 Admin can upload, Edit, and Delete Post</h3>
                    </div>
                    </div>
              </div>
          </div>
          </div>
          </div>
        </main>
      </ThemeProvider>
    )
}

export default GridNews