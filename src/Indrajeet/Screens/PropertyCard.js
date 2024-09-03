import React from "react";
import "./PropertyCard.css";
import { FaRegHeart } from "react-icons/fa";

const PropertyCard = ({ id, image, title, description, price, details }) => {
  return (
    
<div className="property-card">
      <div className="property-image">
        <button className="like-button right">
          <span role="img" aria-label="like">
            <FaRegHeart />
          </span>
        </button>
        <img src={image} alt={title} />
      </div>
      <div className="property-details">
        <div className="property-header">
          <h3 className="property-title">{title}</h3>
          <span className="resale-tag">RESALE</span>
        </div>
        <div className="property-price">
          <span className="price-amount">{price}</span>
        </div>
        <div className="property-meta">
          <span className="property-area">{details[0]}</span>
          <span className="property-bhk">{details[1]}</span>
        </div>
        <div className="property-extra">{description}</div>

        <div className="property-footer">
          <div className="property-info">
            <p className="property-date">4d ago</p>
            <p className="property-owner">Owner</p>
          </div>

          <div className="contact-section">
            <a href={`tel:${id}`} className="contact-btn">
              Contact
            </a>
            <a href={`tel:${id}`} className="view-number-btn">
              View Number
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default PropertyCard;
