import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuListMinus } from "react-icons/lu";
import ItemCard from "./ItemCard";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#" className="logo">
          99acers
        </a>
      </div>

      <div className="navbar-search">
        <select className="navbar-dropdown">
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
          <option value="pg">Pg</option>
        </select>
        <input
          type="text"
          placeholder="Enter Locality/Project/Society/LandMark"
          className="navbar-input"
        />
        <button className="navbar-search-btn">
          <i>
            <FaSearch />
          </i>
        </button>
      </div>
      <div className="navbar-right">
        <button className="post-property-btn">Post Property</button>

        <div
          className="dropdown-icon"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: 'relative' }}
        >
          <i className="navbar-icon">
            <FaCircleUser />
            <RiArrowDropDownLine />
          </i>
          {open && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                zIndex: 1000,
              }}
              onMouseEnter={handleMouseEnter} // Keep open when hovering over the dropdown
              onMouseLeave={handleMouseLeave}
            >
              <ItemCard />
            </div>
          )}
        </div>
        <i className="navbar-icon">
            <LuListMinus />
          </i>
      </div>
    </nav>
  );
}

export default Navbar;
