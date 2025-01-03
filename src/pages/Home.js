import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import profilePic from "../assets/images/profileimage.JPG";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import ShoehavenImg from "../assets/images/shoehaven.png";
import GridnewsImg from "../assets/images/gridnews.png";
import Mealsprint from "../assets/images/mealsprint.png";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import {
  Css,
  Express,
  Git,
  Html,
  Js,
  Mongodb,
  Nodejs,
  ReactSvg,
  Next,
  Ts,
  Sass,
  Tailwind,
} from "../component/Svg";
import { motion } from "framer-motion";
import SideBar from "../component/SideBar";

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

const Home = () => {
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="header_bar animate-on-scroll"
            style={{ willChange: "opacity, transform" }}
          >
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
          </motion.div>
          <div onClick={handleClick}>
            <div className="animation_container">
              <div className="box">
                <div className="title">
                  <span className="block"></span>
                  <h1>
                    Dauntless dev<span></span>
                  </h1>
                </div>
                <div className="role">
                  <div className="block"></div>
                  <p>
                    Full-Stack <br /> Software Developer (MERN)
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="md-query">
              <div className="profile_pic_container">
                <img
                  className="profile_img"
                  src={profilePic}
                  alt="profile pic"
                  loading="eager"
                />
              </div>
              <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ willChange: "opacity, transform" }}
              >
                <h1>Hi, I'm Paul Oladipupo</h1>
                <h2>A Full-Stack Software Developer</h2>
                <p>
                  I'm Paul Oladipupo, also known as{" "}
                  <strong>Dauntless Dev</strong>. As a passionate and innovative{" "}
                  <strong>Full-Stack Software Developer</strong>, I specialize
                  in designing and building seamless, user-friendly web
                  applications. With expertise in the{" "}
                  <strong>MERN stack</strong> (MongoDB, Express.js, React,
                  Node.js), I bring ideas to life by crafting responsive,
                  dynamic, and functional digital solutions that prioritize
                  exceptional user experiences.
                </p>
                <Button
                  variant="outlined"
                  sx={{
                    color: "rgb(100, 100, 239)",
                    borderColor: "rgb(100, 100, 239)",
                    my: 1.5,
                    "&:hover": {
                      borderColor: "rgb(100, 100, 239)",
                    },
                    "@media (min-width: 1365px)": {
                      fontSize: "1.2rem",
                      padding: "8px 20px",
                    },
                  }}
                  onClick={() => navigate("/about-me")}
                >
                  About me
                </Button>
              </motion.section>
            </div>
            <hr className="seg_line" />
            <div className="skills_container">
              <div className="timeline">
                <CodeOutlinedIcon className="neon-glow" />
                <div className="vertical"></div>
                <CircleOutlinedIcon
                  sx={{ color: "rgb(99, 99, 99)", fontSize: "15px" }}
                />
              </div>
              <div className="content">
                <div className="skill_header">
                  <h2>My Skills</h2>
                  <hr />
                </div>
                <div className="tools_container">
                  {[
                    {
                      Icon: Html,
                      title: "HTML5",
                      description:
                        "Good knowledge of semantic HTML, responsive design, and accessibility, ensuring user-friendly and SEO-optimized web pages.",
                    },
                    {
                      Icon: Css,
                      title: "CSS",
                      description:
                        "Vast knowledge in creating visually appealing and responsive designs with a focus on maintainability and cross-browser compatibility.",
                    },
                    {
                      Icon: Tailwind,
                      title: "Tailwind CSS",
                      description:
                        "Proficient in creating modern and responsive designs using Tailwind CSS, focusing on maintainability and developer efficiency.",
                    },
                    {
                      Icon: Sass,
                      title: "Sass",
                      description:
                        "Proficient in Sass, utilizing its features to develop modular, maintainable, and scalable stylesheets with improved organization and efficiency.",
                    },
                    {
                      Icon: Js,
                      title: "JavaScript",
                      description:
                        "Skilled in JavaScript, building dynamic and interactive web features while maintaining performance and scalability.",
                    },
                    {
                      Icon: Ts,
                      title: "TypeScript",
                      description:
                        "Experienced in TypeScript, ensuring robust and maintainable code with static type checking and advanced JavaScript features.",
                    },
                    {
                      Icon: ReactSvg,
                      title: "React.js",
                      description:
                        "Proficient in React.js, utilizing hooks and state management to create dynamic, responsive user interfaces and seamless web experiences.",
                    },
                    {
                      Icon: Next,
                      title: "Next.js",
                      description:
                        "Experienced in Next.js, leveraging server-side rendering and static site generation for optimized and fast-loading web applications.",
                    },
                    {
                      Icon: Nodejs,
                      title: "Node.js",
                      description:
                        "Experienced in Node.js, building scalable server-side applications and efficiently managing backend services.",
                    },
                    {
                      Icon: Mongodb,
                      title: "MongoDB",
                      description:
                        "Proficient in MongoDB, leveraging its flexible schema design for scalable database solutions and efficient data management.",
                    },
                    {
                      Icon: Express,
                      title: "Express.js",
                      description:
                        "Proficient in Express.js, developing robust APIs and server-side applications with efficient routing and middleware integration.",
                    },
                    {
                      Icon: Git,
                      title: "Git",
                      description:
                        "Proficient in Git, managing version control effectively, collaborating on code, and maintaining an organized project history.",
                    },
                  ].map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="tool"
                      style={{ willChange: "opacity, transform" }}
                    >
                      <div className="glassmophorism">
                        <tool.Icon />
                      </div>
                      <article>
                        <h2>{tool.title}</h2>
                        <p>{tool.description}</p>
                      </article>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="seg_line" />
            <div className="project_container">
              <div className="timeline">
                <CasesOutlinedIcon className="neon-glow" />
                <div className="vertical"></div>
                <CircleOutlinedIcon
                  sx={{ color: "rgb(99, 99, 99)", fontSize: "15px" }}
                />
              </div>
              <div className="content">
                <div className="project_header">
                  <h2>Featured Projects</h2>
                  <hr />
                </div>
                <p>Here are a few of my selected projects for you to explore</p>
                <div className="project-md-query">
                  <motion.div
                    id="project"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ willChange: "opacity, transform" }}
                    className="projects"
                  >
                    <div className="set-container">
                      <div className="project_img_container">
                        <motion.img
                          src={Mealsprint}
                          alt="shoe haven"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <h2>Mealsprint</h2>
                      <p>
                        This is an e-commerce platform offering quick and
                        reliable meal deliveries with a diverse, customizable
                        menu. It integrates easy online ordering, secure
                        payments, and real-time order tracking.
                      </p>
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
                          onClick={() =>
                            window.open(
                              "https://mealsprint.vercel.app/",
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
                          LIVE DEMO{" "}
                          <LinkIcon sx={{ fontSize: "16px", ml: 0.8 }} />
                        </Button>
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          onClick={() => navigate("/mealsprint")}
                          sx={{
                            color: "rgb(100, 100, 239)",
                            borderColor: "rgb(100, 100, 239)",
                            my: 1.5,
                            "&:hover": {
                              borderColor: "rgb(100, 100, 239)",
                            },
                          }}
                        >
                          MORE INFO{" "}
                          <InfoIcon sx={{ fontSize: "16px", ml: 0.8 }} />
                        </Button>
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    id="project"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ willChange: "opacity, transform" }}
                    className="projects"
                  >
                    <div className="set-container">
                      <div className="project_img_container">
                        <motion.img
                          src={ShoehavenImg}
                          alt="shoe haven"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <h2>Shoe Haven</h2>
                      <p>
                        This e-commerce shoe shopping site simplifies finding
                        and buying the perfect pair of shoes. Customers can
                        easily browse various styles and brands, add items to
                        their cart, and make secure purchases.
                      </p>
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
                          onClick={() =>
                            window.open(
                              "https://shoe-haven.vercel.app/",
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
                          LIVE DEMO{" "}
                          <LinkIcon sx={{ fontSize: "16px", ml: 0.8 }} />
                        </Button>
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          onClick={() => navigate("/shoe-haven")}
                          sx={{
                            color: "rgb(100, 100, 239)",
                            borderColor: "rgb(100, 100, 239)",
                            my: 1.5,
                            "&:hover": {
                              borderColor: "rgb(100, 100, 239)",
                            },
                          }}
                        >
                          MORE INFO{" "}
                          <InfoIcon sx={{ fontSize: "16px", ml: 0.8 }} />
                        </Button>
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    id="project2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ willChange: "opacity, transform" }}
                    className="projects"
                  >
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
                      <p>
                        This news website simplifies staying informed. Users can
                        easily browse various news categories, read the latest
                        articles, and stay updated with breaking news alerts.
                      </p>
                    </div>
                    <h2>PROJECT INFO</h2>
                    <hr className="seg_line2" />
                    <div className="project_info">
                      <h3>Year</h3>
                      <p>2023</p>
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
                          onClick={() =>
                            window.open(
                              "https://gridnews.onrender.com/",
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
                          LIVE DEMO{" "}
                          <LinkIcon sx={{ fontSize: "16px", ml: 0.8 }} />
                        </Button>
                      </span>
                      <span>
                        <Button
                          variant="outlined"
                          onClick={() => navigate("/grid-news")}
                          sx={{
                            color: "rgb(100, 100, 239)",
                            borderColor: "rgb(100, 100, 239)",
                            my: 1.5,
                            "&:hover": {
                              borderColor: "rgb(100, 100, 239)",
                            },
                          }}
                        >
                          MORE INFO{" "}
                          <InfoIcon sx={{ fontSize: "16px", ml: 0.8 }} />
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
  );
};

export default Home;
