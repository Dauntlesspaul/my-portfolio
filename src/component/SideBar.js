import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styling.scss";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import HouseIcon from "@mui/icons-material/House";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Copyright, WhatsApp } from "@mui/icons-material";
import PDF from "../assets/files/Paul Oladipupo — Software Dev.pdf";

const SideBar = ({ isChecked }) => {
  const sidebarRef = useRef();
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth >= 1280) {
        sidebarRef.current.classList.add("open");
      } else {
        sidebarRef.current.classList.remove("open");
      }
    };

    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, [isChecked]);

  useEffect(() => {
    if (isChecked) {
      sidebarRef.current.classList.add("open");
    } else {
      sidebarRef.current.classList.remove("open");
    }
  }, [isChecked]);

  return (
    <div ref={sidebarRef} className="side-bar">
      <div className="container">
        <div className="search">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              background: "rgb(207, 207, 207)",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, background: "rgb(207, 207, 207)" }}
              placeholder="Paul Oladipupo"
              disabled={true}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="menu-header">
          <h2>Menu</h2>
          <hr />
        </div>
        <h2>
          <Link
            to="/"
            style={{ color: currentPath === "/" ? "gray" : "" }}
            className="no-style"
          >
            HOMEPAGE
          </Link>
        </h2>
        <hr className="seg_line2" />
        <h2>
          <Link
            to="/projects"
            style={{ color: currentPath === "/projects" ? "gray" : "" }}
            className="no-style"
          >
            PROJECTS
          </Link>
        </h2>
        <hr className="seg_line2" />
        <a href={PDF} rel="noreferrer" target="_blank">
          <h2>DOWNLOAD RESUME</h2>
        </a>
        <hr className="seg_line2" />
        <div className="intouch-header">
          <h2>Contact me</h2>
          <hr />
        </div>
        <p>
          I am open to frontend and backend web development roles, and
          collaborative projects
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:dauntlesspaulwit@gmail.com"
        >
          <div className="e-address">
            <EmailIcon sx={{ color: "white", fontSize: "20px", mr: 1 }} />
            <span>Dauntlesspaulwit@gmail.com</span>
          </div>
        </a>
        <hr className="seg_line2" />
        <a target="_blank" rel="noopener noreferrer" href="tel:+2348166376786">
          <div className="e-address">
            <CallIcon sx={{ color: "white", fontSize: "20px", mr: 1 }} />
            <span>+234 81 6637 6786</span>
          </div>
        </a>
        <hr className="seg_line2" />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://wa.link/6e51su"
        >
          <div className="e-address">
            <WhatsApp sx={{ color: "white", fontSize: "20px", mr: 1 }} />
            <span>Chat me up</span>
          </div>
        </Link>
        <hr className="seg_line2" />
        <div className="e-address">
          <HouseIcon sx={{ color: "white", fontSize: "20px", mr: 1 }} />
          <span>Ikeja, Lagos, Nigeria</span>
        </div>
        <hr className="seg_final" />
        <div className="e-address">
          <Copyright sx={{ color: "white", fontSize: "20px", mr: 1 }} />
          <span>All rights reserved. 2024</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
