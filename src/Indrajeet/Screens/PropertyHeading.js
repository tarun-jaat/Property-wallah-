import React from "react";
import "./PropertyHeading.css";
import { Typography } from "@mui/material";
import { IoFilterSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function PropertyHeading() {
  return (
    <div className="property">
      <h3 className="property-heading">
        865 results | Flats in Bhopal for Sale
      </h3>
      <div className="about-location">
        Get to know more about <b>Bhopal</b>{" "}
        <a href="#" className="viewInsights">
          View Insights
        </a>
      </div>
      <div className="container">
        <i className="leftIcon">
          <FaAngleLeft />
        </i>
        <div className="filter-element">
          <button>verified</button>
          <button>Owner</button>
          <button>UnderConstruction</button>
          <button>verified</button>
          <button>Owner</button>
          <button>UnderConstruction</button>
          <button>verified</button>
          <div>
          <i className="rightIcon">
          <FaAngleRight />
        </i>

          </div>
         
        </div>
      

        <div className="filter">
          <i>
            <IoFilterSharp />
          </i>
          <p>Sort</p>
          <i>
            <RiArrowDropDownLine />
          </i>
        </div>
      </div>
    </div>
  );
}

export default PropertyHeading;
