import React from "react";
import Moposhluxury from "../assets/images/moposh.png";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Moposh() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{ willChange: "opacity, transform" }}
      className="glass-container"
    >
      <div id="project" className="projects">
        <div className="set-container">
          <div className="project_img_container">
            <motion.img
              src={Moposhluxury}
              alt="shoe haven"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <h2>Moposhluxury</h2>
          <p>
            {" "}
            MoposhLuxury is a business website showcasing a curated selection of
            luxury fashion items and accessories. It provides an elegant
            platform for potential customers to explore high-end products and
            make inquiries.
          </p>
        </div>
        <h2>PROJECT INFO</h2>
        <hr className="seg_line2" />
        <div className="project_info">
          <h3>Year</h3>
          <p>2025</p>
        </div>
        <hr className="seg_line2" />
        <div className="project_info">
          <h3>Type</h3>
          <p>Business Website</p>
        </div>
        <hr className="seg_line2" />
        <div className="project_info">
          <span>
            <Button
              variant="outlined"
              onClick={() =>
                window.open(
                  "https://moposhluxury.vercel.app/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              sx={{
                color: "rgb(100, 100, 239)",
                borderColor: "rgb(100, 100, 239)",
                my: 1.5,
                "&:hover": {
                  borderColor: "rgb(100, 100, 239)",
                },
              }}
            >
              LIVE DEMO <LinkIcon sx={{ fontSize: "16px", ml: 0.8 }} />
            </Button>
          </span>
          <span>
            <Button
              variant="outlined"
              onClick={() => navigate("/moposh")}
              sx={{
                color: "rgb(100, 100, 239)",
                borderColor: "rgb(100, 100, 239)",
                my: 1.5,
                "&:hover": {
                  borderColor: "rgb(100, 100, 239)",
                },
              }}
            >
              MORE INFO <InfoIcon sx={{ fontSize: "16px", ml: 0.8 }} />
            </Button>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Moposh;
