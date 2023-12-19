import React from "react";
import "./Education.scss";
import { motion } from "framer-motion";
import { resume } from "../../data";
import ResumeItem from "../ResumeItem/ResumeItem";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: -0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Education = () => {
  return (
    <motion.div
      className="about"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container">
        <motion.div
          className="row resume"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="section_title" variants={textVariants}>
            My <span>Education</span>
          </motion.h2>
          <div className="col-md-6" variants={textVariants}>
            <div className="resume_head">
              <h3 className="text-center">Education</h3>
            </div>
            <div className="resume_data">
              {resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
          <div className="col-md-6" variants={textVariants}>
            <div className="resume_head">
              <h3 className="text-center">Internship</h3>
            </div>
            <div className="resume_data">
              {resume.map((val) => {
                if (val.category === "experience") {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
