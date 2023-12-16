import React from "react";
import "./About.scss";
import Insta from "../../Img/Instagram.png";
import Link from "../../Img/Link.png";
import Git from "../../Img/Git.png";
import { motion } from "framer-motion";
import FloatingBtn from "../FloatingBtn/FloatingBtn";

const textVariants = {
  initial: {
    x: -500,
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

const About = () => {
  return (
    <motion.div
      className="About container-md"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <div className="row">
        <div className="col-md-3">
          <div className="Me">
            <h1>About Me</h1>
            <p>🤵 Nitesh Malviya</p>
            <p>📞 +91 7374866730</p>
            <p>
              🏡 B-303, Krish Elite, S.P. Ring Road, Nikol, Ahmedabad, Gujarat
            </p>
            <p>📫 Niteshmalvi74@gmail.com</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="Skil">
            <h1>Skills</h1>
            <p>HTML</p>
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>JS</p>
            <p>React Redux</p>
            <p>Python</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="Hobby">
            <h1>Hobbies</h1>
            <p>📚 Study</p>
            <p>💻 Coding</p>
            <p>🏏 Cricket</p>
            <p>🎥 Movies</p>
            <p>🎮 Games</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="Social">
            <h1>Social</h1>
            <a
              href="https://instagram.com/nitesh_malvi_007?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={Insta} alt="" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/nitesh-malviya-01b572247"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Link} alt="" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Niteshm007"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Git} alt="" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <FloatingBtn />
    </motion.div>
  );
};

export default About;
