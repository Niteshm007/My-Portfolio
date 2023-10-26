import React, { useState } from "react";
import "./Into.scss";
import { motion } from "framer-motion";
import Nit from "../../Img/Hero.png";
import Scroll from "../../Img/Scroll.png";
import Resume from "../../Resume/Nitesh (Resume) .pdf";

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

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const Intro = () => {
  const [downloading, setDownloading] = useState(false);
  const handleDownloadClick = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    });
  };
  return (
    <div className="Intro container-md">
      <div className="row">
        <div className="col-md-6">
          <motion.div
            className="txtContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={textVariants}>Nitesh Malviya</motion.h1>
            <motion.h2 variants={textVariants}>
              Web Developer & Designer
            </motion.h2>
            <motion.p variants={textVariants}>
              Frontend Developer with a high level of experience in web
              designing and development, producing quality work
            </motion.p>
            <motion.div>
              <a href={Resume} download="Nitesh (Resume) .pdf">
                <button
                  className={`CV ${downloading ? "downloading" : ""}`}
                  onClick={handleDownloadClick}
                >
                  {downloading ? "Processing..." : "Download CV"}
                </button>
              </a>
            </motion.div>
            <motion.img
              src={Scroll}
              alt=""
              variants={textVariants}
              animate="scrollBtn"
            />
            <motion.div
              className="slidingContainer"
              variants={slideVariants}
              initial="initial"
              animate="animate"
            >
              Web Developer & Designer
            </motion.div>
          </motion.div>
        </div>

        <div className="col-md-6">
          <motion.div className="rightImg" variants={textVariants}>
            <motion.img src={Nit} alt="" variants={textVariants} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
