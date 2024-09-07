import React from 'react'
import GridnewsImg from '../assets/images/gridnews.png';
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Gridnews() {
    const navigate = useNavigate();
  return (
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
  )
}

export default Gridnews