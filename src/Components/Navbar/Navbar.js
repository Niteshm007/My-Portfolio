import React from "react";
import "./Navbar.scss";
import Sidebar from "./Sidebar/Sidebar";
import Insta from '../../Img/Instagram.png'
import Link from '../../Img/Link.png'
import Git from '../../Img/Git.png'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container d-flex justify-content-between">
        <div className="Side">
          <Sidebar />
        </div>
        <div className="Name">
          <h3>Nitesh Malviya</h3>
        </div>
        <div className="Social">
          <div className="Links">
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
              <img src={Link} alt="" />
            </a>
            <a
              href="https://github.com/Niteshm007"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Git} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
