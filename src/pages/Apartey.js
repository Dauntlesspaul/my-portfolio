import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, IconButton, ThemeProvider } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import AparteyImg from "../assets/images/apartey.png";
import Apt1 from "../assets/images/apartey1.png";
import Apt2 from "../assets/images/apartey2.png";
import Apt3 from "../assets/images/apartey3.png";

import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SideBar from "../component/SideBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../slick-custom.css";
const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.neon-glow": {
            color: "white",
            filter:
              "drop-shadow(0 0 5px #00e6e6) drop-shadow(0 0 10px #00e6e6) drop-shadow(0 0 20px #00e6e6) drop-shadow(0 0 40px #00e6e6)",
            "&:hover": {
              filter:
                "drop-shadow(0 0 10px #00e6e6) drop-shadow(0 0 20px #00e6e6) drop-shadow(0 0 30px #00e6e6) drop-shadow(0 0 50px #00e6e6)",
            },
          },
        },
      },
    },
  },
});
const images = [AparteyImg, Apt1, Apt2, Apt3];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
const Apartey = () => {
  const [isChecked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleChange = () => {
    setChecked((prevState) => !prevState);
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
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  const handleClick = () => {
    if (window.innerWidth < 1280) {
      setChecked(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <SideBar isChecked={isChecked} />
        <div className="main-container">
          <div className="header_bar">
            <div className="header_content">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                role="button"
                aria-label="Display the menu"
                className="menu"
              />
              <div className="social">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://twitter.com/WitsPaul"
                >
                  <XIcon sx={{ color: "white", mx: 0.3 }} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.linkedin.com/in/oladipupo-paul"
                >
                  <LinkedInIcon sx={{ color: "white", mx: 0.3 }} />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://github.com/Dauntlesspaul"
                >
                  <GitHubIcon sx={{ color: "white", mx: 0.3 }} />
                </Link>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:dauntlesspaulwit@gmail.com"
                >
                  <EmailIcon sx={{ color: "white", mx: 0.3 }} />
                </a>
              </div>
            </div>
          </div>
          <div onClick={handleClick}>
            <div className="animation_container_p">
              <div className="box-p">
                <div className="title-p">
                  <span className="block-p"></span>
                  <h1>
                    Dauntless dev<span></span>
                  </h1>
                </div>
                <div className="role-p">
                  <div className="block-p"></div>
                  <p>
                    Full-Stack <br /> Software Developer (MERN)
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <IconButton
              sx={{
                backgroundColor: "gray",
                marginBottom: "-20px",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackIosNewIcon
                sx={{ color: "black", fontSize: "14px", fontWeight: "800" }}
              />
            </IconButton>
            <div className="project_container project-page">
              <div className="timeline">
                <CasesOutlinedIcon className="neon-glow" />
                <div className="vertical"></div>
                <CircleOutlinedIcon
                  sx={{ color: "rgb(99, 99, 99)", fontSize: "15px" }}
                />
              </div>
              <div className="info-content">
                <div className="project_header">
                  <h2>Featured Projects</h2>
                  <hr />
                </div>
                <p>More info about Apartey</p>
                <div className="info-query">
                  <div className="carousel-set">
                    <Slider {...settings}>
                      {images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{ width: "100%", height: "auto" }}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="info">
                    <h2>Apartey</h2>
                    <p>
                      This is a property listing and review platform. It helps
                      future tenants make informed decisions while also
                      providing property managers with valuable feedback to
                      improve their offerings.
                    </p>
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
                    <h2>TOOLS USED</h2>
                    <hr className="seg_line2" />
                    <h3> 👉Tailwindcss</h3>
                    <h3> 👉Nextjs</h3>
                    <h3> 👉Express js</h3>
                    <h3> 👉Mongo Database</h3>
                    <h3> 👉AWS S3</h3>
                    <h3> 👉Stripe</h3>
                    <hr className="seg_line2" />
                    <h2>FEATURES</h2>
                    <hr className="seg_line2" />
                    <h3>
                      📌 Real-time notifications on equiry and property match
                    </h3>
                    <h3>📌 Property Sale, Rent and Swap</h3>
                    <h3>
                      📌 Property Suggestion based on location and preferences
                    </h3>
                    <h3>📌 Analytics dashboard</h3>
                    <h3>📌 In app chat system system</h3>
                    <h3>📌 CRM tools</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default Apartey;
