import React from "react";
import "./Sidebar.css";
import logo from "../../assets/Vector.png";
import logo2 from "../../assets/NFTify.svg";
import logo3 from "../../assets/listlogo.png";
import logo4 from "../../assets/listlogo2.png";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" width={25} height={29} />
        <img src={logo2} alt="logo 2" />
      </div>
      <div className="menu">
        <ul>
          <li className="active">
            <img src={logo3} alt="" width={24} height={24} />
            Token Address
          </li>
          <li>
            <img src={logo4} alt="" width={24} height={24} />
            Pair Address
          </li>
        </ul>
        <div className="social__icons">
          <AiFillFacebook size={24} color="red" />
          <AiFillLinkedin size={24} color="red" />
          <AiFillTwitterSquare size={24} color="red" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
