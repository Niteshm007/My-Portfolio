import React, { useState } from "react";
import "./Sidebar.scss";
import {motion} from 'framer-motion'
import Link from "./Link/Link";
import Toggle from './Toggle/Toggle'

const variants = {
  open:{
    clipPath:"circle(1200px at 50px 50px)",
    transition:{
      type:"spring",
      stiffness:20,
    }
  },
  closed:{
    clipPath:"circle(30px at 50px 50px)",
    transition:{
      delay:0.5,
      type:"spring",
      stiffness:400,
      damping:40,
    }
  }
}
const Sidebar = () => {
  const[open, setOpen] = useState(false)

  return (
    <motion.div className="Sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Link />
      <Toggle setOpen={setOpen}/>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
