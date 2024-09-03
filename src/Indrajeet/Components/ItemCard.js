import React from 'react';
import './ItemCard.css';

function ItemCard() {
  return (
    <div className='item-card'>
      <div className="dropdown-menu">
        <h3 className="dropdown-header">LOGIN / REGISTER</h3>
        <h4 className="dropdown-subheader">My Activity</h4>
        <div className='list-item'>
        <ul>
          <li><a href="#">Recently Searched</a></li>
          <li><a href="#">Recently Viewed</a></li>
          <li><a href="#">Shortlisted</a></li>
          <li><a href="#">Contacted</a></li>
        </ul>

        </div>
      
      </div>
    </div>
  );
}

export default ItemCard;
