import React, { useState } from "react";
import "./Header.css";
import { BiSearchAlt } from "react-icons/bi";

const Header = ({ search, setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="header">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
        <BiSearchAlt size={24} color="white" />
      </div>
      <div className="connect">
        <button>Connect</button>
      </div>
    </div>
  );
};

export default Header;
