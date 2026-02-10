import  { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, IconButton, ThemeProvider } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { motion } from "framer-motion";
import SideBar from "../component/SideBar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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
const About = () => {
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
                    Full-Stack <br /> Software Engineer
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
            <div className="project_container about-page">
              <div className="timeline">
                <PermIdentityIcon className="neon-glow" />
                <div className="vertical"></div>
                <CircleOutlinedIcon
                  sx={{ color: "rgb(99, 99, 99)", fontSize: "15px" }}
                />
              </div>
              <div className="content">
                <div className="project_header">
                  <h2>About Me</h2>
                  <hr />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ willChange: "opacity, transform" }}
                  className="about-me"
                >
                  <p>
                    I’m Paul Oladipupo, a full-stack software engineer focused
                    on building reliable, scalable, and maintainable web
                    applications. I enjoy working across the stack — from
                    frontend architecture and user interfaces to backend
                    services and database design. Over time, my work has evolved
                    beyond single-stack development into designing systems that
                    prioritize performance, clarity, and long-term
                    sustainability. I regularly work with modern tools such as
                    React, Next.js, Node.js, and PostgreSQL-based platforms like
                    Supabase. I value clean code, thoughtful collaboration, and
                    building software that solves real problems. Whether working
                    independently or within a team, I’m comfortable translating
                    ideas into well-structured, production-ready solutions.
                  </p>

                  <h2>Hobbies</h2>
                  <p>
                    Outside of work, I enjoy playing chess, exploring JavaScript
                    trivia, reading, and participating in hackathons.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
};

export default About;
