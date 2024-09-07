import React from 'react'
import ShoehavenImg from '../assets/images/shoehaven.png';
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Shoehaven() {

    const navigate = useNavigate();

  return (
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
  )
}

export default Shoehaven