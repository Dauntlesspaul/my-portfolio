import React from "react";
import AparteyImg from "../assets/images/apartey.png";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Apartey() {
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
              src={AparteyImg}
              alt="shoe haven"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <h2>Apartey</h2>
          <p>
            This is a property listing and review platform. It helps future tenants make informed decisions while also providing
            property managers with valuable feedback to improve their
            offerings.
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
          <p>Real Estate</p>
        </div>
        <hr className="seg_line2" />
        <div className="project_info">
          <span>
            <Button
              variant="outlined"
              sx={{
                color: "rgb(100, 100, 239)",
                borderColor: "rgb(100, 100, 239)",
                my: 1.5,
                "&:hover": {
                  borderColor: "rgb(100, 100, 239)",
                },
              }}
              onClick={() =>
                window.open(
                  "https://apartey.com/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              LIVE DEMO <LinkIcon sx={{ fontSize: "16px", ml: 0.8 }} />
            </Button>
          </span>
          <span>
            <Button
              variant="outlined"
              onClick={() => navigate("/apartey")}
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

export default Apartey;
