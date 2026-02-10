import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import profilePic from "../assets/images/profileImage.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import Moposh from "../assets/images/moposh.png";
import ShoehavenImg from "../assets/images/shoehaven.png";
import GridnewsImg from "../assets/images/gridnews.png";
import Mealsprint from "../assets/images/mealsprint.png";
import InfoIcon from "@mui/icons-material/Info";
import LinkIcon from "@mui/icons-material/Link";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import {
  Express,
  Git,
  Html,
  Mongodb,
  Nodejs,
  ReactSvg,
  Next,
  Ts,
  Tailwind,
  RestAPI,
  CICD,
  S3,
  PostgreSQL,
  Redux,
  Websocket,
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
                    Full-Stack <br /> Software Engineer
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
              <section>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ willChange: "opacity, transform" }}
                >
                  <h1>Hi, I'm Paul Oladipupo</h1>
                  <h2>A Full-Stack Software Engineer</h2>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ willChange: "opacity, transform" }}
                >
                  I design and build production-ready web applications with a
                  focus on clean architecture, performance, and maintainability.
                  I work across the stack using React, Next.js, Node.js, and
                  PostgreSQL-based systems such as Supabase to deliver scalable
                  and reliable digital products.
                </motion.p>
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
              </section>
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
                      group: "Frontend Engineering",
                      summary:
                        "Building accessible, performant user interfaces and frontend architecture.",
                      tools: [
                        { Icon: ReactSvg, title: "React" },
                        { Icon: Next, title: "Next.js" },
                        { Icon: Ts, title: "TypeScript" },
                        { Icon: Tailwind, title: "Tailwind CSS" },
                        { Icon: Redux, title: "Redux" },
                        { Icon: Html, title: "HTML / CSS" },
                      ],
                    },
                    {
                      group: "Backend & APIs",
                      summary:
                        "Designing scalable backend services, APIs, and system integrations.",
                      tools: [
                        { Icon: Nodejs, title: "Node.js" },
                        { Icon: Express, title: "Express.js" },
                        { Icon: RestAPI, title: "REST APIs" },
                        { Icon: Websocket, title: "Websocket" },
                      ],
                    },
                    {
                      group: "Databases & Infrastructure",
                      summary:
                        "Working with relational and document databases based on product needs.",
                      tools: [
                        { Icon: Mongodb, title: "MongoDB" },
                        { Icon: PostgreSQL, title: "PostgreSQL" },
                        { Icon: S3, title: "S3 Bucket" }, 
                      ],
                    },
                    {
                      group: "Tooling & Workflow",
                      summary:
                        "Maintaining clean workflows and collaborative development practices.",
                      tools: [
                        { Icon: Git, title: "Git" },
                        { Icon: CICD, title: "CI/CD" },
                      ],
                    },
                  ].map((section, index) => (
                    <motion.section
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="tool_group"
                    >
                      <header className="tool_group_header">
                        <h2>{section.group}</h2>
                        <p>{section.summary}</p>
                      </header>

                      <div className="tool_group_items">
                        {section.tools.map((tool, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="tool"
                          >
                            <div className="glassmophorism">
                              <tool.Icon />
                            </div>
                            <article>
                              <h3>{tool.title}</h3>
                            </article>
                          </motion.div>
                        ))}
                      </div>
                    </motion.section>
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
                            src={Moposh}
                            alt="shoe haven"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <h2>Moposhluxury</h2>
                        <p>
                          MoposhLuxury is a business website showcasing a
                          curated selection of luxury fashion items and
                          accessories. It provides an elegant platform for
                          potential customers to explore high-end products and
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
                                "noopener,noreferrer",
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
                            MORE INFO{" "}
                            <InfoIcon sx={{ fontSize: "16px", ml: 0.8 }} />
                          </Button>
                        </span>
                      </div>
                    </div>
                  </motion.div>
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
                                "noopener,noreferrer",
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
                    </div>
                  </motion.div>
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
                                "noopener,noreferrer",
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
                    </div>
                  </motion.div>
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
                            src={GridnewsImg}
                            alt="shoe haven"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                        <h2>Grid News</h2>
                        <p>
                          This news website simplifies staying informed. Users
                          can easily browse various news categories, read the
                          latest articles, and stay updated with breaking news
                          alerts.
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
                                "noopener,noreferrer",
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
