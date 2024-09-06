import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, IconButton, ThemeProvider } from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import Mealsprint from '../assets/images/mealsprint.png';
import Ms2 from '../assets/images/ms2.png';
import Ms3 from '../assets/images/ms3.png';
import Ms4 from '../assets/images/ms4.png';
import Ms5 from '../assets/images/ms5.png';
import Ms6 from '../assets/images/ms6.png';
import Ms7 from '../assets/images/ms7.png';

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
    Mealsprint,
    Ms2,
    Ms3,
    Ms4,
    Ms5,
    Ms6,
    Ms7,
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
const MealSprint = () => {
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
                <p>More info about Mealsprint</p>
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
                 <h2>Mealsprint</h2>
                 <p>TThis is an e-commerce platform offering quick and reliable meal deliveries with a diverse, customizable menu. It integrates easy online ordering, secure payments, and real-time order tracking. The service focuses on speed, quality, and customer satisfaction, ensuring meals arrive fresh and on time.</p>
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
                    <h2>TOOLS USED</h2>
                    <hr className="seg_line2" />
                    <h3> 👉Tailwind CSS</h3>
                    <h3> 👉Redux Toolkit</h3>
                    <h3> 👉React</h3>
                    <h3> 👉Stripe payment intent</h3>
                    <h3> 👉AWS S3 bucket</h3>
                    <h3> 👉Node.js</h3>
                    <h3> 👉Express.js</h3>
                    <h3> 👉Mongo Database</h3>
                    <hr className="seg_line2" />
                    <h2>FEATURES</h2>
                    <hr className="seg_line2" />
                    <h3>📌 User Sign up/Sign in</h3>
                    <h3>📌 User can cart and place oder</h3>
                    <h3>📌 User can make payment using card </h3>
                    <h3>📌 User can track order and order history</h3>
                    <h3>📌 Email notiication on successful order</h3>
                    <h3>📌 User can subscribe to new letter to get latest offers</h3>
                    <h3>📌 User can change or recover password through registered email</h3>
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

export default MealSprint