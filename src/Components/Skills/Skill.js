import React from "react";
import "./Skill.scss";
import { motion } from "framer-motion";
import Card from "./Cards/Card";

const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
  
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

const Skill = () => {
  return (
    <motion.div
      className="Skill container-md"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
    >
      <div className="row">
        <div className="titleContainer text-center">
        <motion.h2 className="section_title" variants={variants}>
        My <span>Skills</span>
      </motion.h2>
        </div>
      </div>

      <div className="row">
        <Card/>
      </div>
    </motion.div>
  );
};

export default Skill;
