import React from "react";
import "./Intro.scss";
import Profile from "../../assets/N.jpg";
import { FaDownload } from "react-icons/fa";
import CV from "../../Resume/Nitesh (Resume) .pdf";
import { motion } from "framer-motion";

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

const Intro = () => {
  return (
    <div className="home section">
      <div className="container">
        <motion.div
          className="row"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="col-md-6">
            <img src={Profile} alt="" className="home_img" />
          </motion.div>
          <div className="col-md-6">
            <div className="home_content">
              <div className="home_data">
                <div className="home_title">
                  <motion.h1 variants={textVariants}>
                    I'm Nitesh Malviya
                  </motion.h1>
                  <h1>
                    <motion.span variants={textVariants}>
                      Web Developer
                    </motion.span>
                  </h1>
                  <motion.p
                    className="home_description"
                    variants={textVariants}
                  >
                    I'm a Frontend Developer with a high level of knowledge in
                    web development, producing quality work.
                  </motion.p>

                  <motion.div
                    className="CV text-center mt-4"
                    variants={textVariants}
                  >
                    <a href={CV} download="" className="button">
                      Download CV
                      <span className="button_icon">
                        <FaDownload />
                      </span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
