import React from "react";
import "./Sidebar.css";
import logo from "../../assets/Vector.png";
import logo2 from "../../assets/NFTify.svg";
import logo3 from "../../assets/listlogo.png";
import logo4 from "../../assets/listlogo2.png";

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
      </div>
    </div>
  );
};

export default Sidebar;
