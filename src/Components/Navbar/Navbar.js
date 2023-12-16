import React from "react";
import "./Navbar.scss";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import N from "../../Img/N.png";
import { motion } from "framer-motion";
import Insta from "../../Img/Instagram.png"
import Linked from "../../Img/Link.png"
import Git from "../../Img/Git.png"

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const AppNavbar = () => {
  const navListStyle = {
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "25px",
    color: "rosybrown"
  };

  return (
    <motion.div
      className="Navbar"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <Navbar expand="md">
        <Navbar.Brand className="mr-auto">
          <div className="nav-left">
            <div className="nav-name">
              <img src={N} alt="" />
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link
              to="Home"
              className="nav-list"
              style={navListStyle}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              to="Intro"
              className="nav-list"
              style={navListStyle}
              smooth={true}
              duration={500}
            >
              Intro
            </Link>
            <Link
              to="Skills"
              className="nav-list"
              style={navListStyle}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
            <Link
              to="Work"
              className="nav-list"
              style={navListStyle}
              smooth={true}
              duration={500}
            >
              Works
            </Link>

            <Link
              to="Contact"
              className="nav-list"
              style={navListStyle}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
            <Link
              to="About"
              className="nav-list"
              style={navListStyle}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </Nav>
          <Nav>
            <div className="Social">
            <a
              href="https://instagram.com/nitesh_malvi_007?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={Insta} alt="" />
            </a>

            <a
              href="https://www.linkedin.com/in/nitesh-malviya-01b572247"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linked} alt="" />
            </a>
            <a
              href="https://github.com/Niteshm007"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Git} alt="" />
            </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default AppNavbar;
