import React from "react";
import { motion } from "framer-motion";
import "./Card.scss";
import Html from '../../../Img/Html.png'
import Css from '../../../Img/Css.png'
import Bs from '../../../Img/Bs.png'
import Js from '../../../Img/Js.png'
import Rct from '../../../Img/React.png'
import Python from '../../../Img/Python.png'

const Card = () => {
  return (
    <div className="container-fluid card-container d-flex flex-wrap justify-content-center align-items-center">
      {/* Card 1 */}
      <motion.div
        className="Card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="card text-center card-br"
          style={{
            width: "16rem",
            height: "16rem",
          }}
        >
          <img src={Html} className="card-img-top card-img mt-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">HTML</h5>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="Card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="card text-center card-br"
          style={{
            width: "16rem",
            height: "16rem",
          }}
        >
          <img src={Css} className="card-img-top card-img mt-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">CSS</h5>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="Card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="card text-center card-br"
          style={{
            width: "16rem",
            height: "16rem",
          }}
        >
          <img src={Bs} className="card-img-top card-img mt-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">BootStrap</h5>
          </div>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        className="Card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="card text-center card-br"
          style={{
            width: "16rem",
            height: "16rem",
          }}
        >
          <img src={Js} className="card-img-top card-img mt-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">JS</h5>
          </div>
        </div>
      </motion.div>

      {/* Card 5 */}
      <motion.div
        className="Card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="card text-center card-br"
          style={{
            width: "16rem",
            height: "16rem",
          }}
        >
          <img src={Rct} className="card-img-top card-img mt-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React</h5>
          </div>
        </div>
      </motion.div>

      {/* Card 6 */}
      <motion.div
        className="Card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="card text-center card-br"
          style={{
            width: "16rem",
            height: "16rem",
          }}
        >
          <img
            src={Python}
            className="card-img-top card-img mt-4"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Python</h5>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
