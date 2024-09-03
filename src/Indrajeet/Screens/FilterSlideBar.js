import React from 'react'
import Navbar from '../Components/Navbar'
import  './FilterSlidebar.css';

function FilterSlideBar() {
  return (
    <div>
      <div className="filter-sidebar">
      <div className="filter-section">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className="filter-label">Hide already seen</span>
      </div>
      <div className="filter-section">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className="filter-label">Verified Properties</span>
      </div>

      {/* <div className="filter-section">
        <h3>Verified properties</h3>
        <label>
          <input type="checkbox" /> Verified by 99acres verification team
        </label>
      </div> */}

      <div className="filter-section">
        <h3>Budget</h3>
        <input type="range" min="0" max="100" className="budget-range" />
        <div className="budget-inputs">
          <input type="text" placeholder="Min Budget" />
          <input type="text" placeholder="Max Budget" />
        </div>
      </div>

      <div className="filter-section">
        <h3>Type of property</h3>
        <div className="filter-option">
          <input type="checkbox" /> Residential Apartment
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Residential Land
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Independent House/Villa
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Independent/Builder Floor
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Farm House
        </div>
      </div>
      <div className="filter-section">
        <h3>No. of Bedrooms</h3>
        <div className="filter-option">
          <input type="checkbox" /> Residential Apartment
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Residential Land
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Independent House/Villa
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Independent/Builder Floor
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Farm House
        </div>
      </div>
      <div className="filter-section">
        <h3>Construction Status</h3>
        <div className="filter-option">
          <input type="checkbox" /> Residential Apartment
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Residential Land
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Independent House/Villa
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Independent/Builder Floor
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Farm House
        </div>
      </div>
      <div className="filter-section">
        <h3>Posted by</h3>
        <div className="filter-option">
          <input type="checkbox" /> Residential Apartment
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Residential Land
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Independent House/Villa
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Independent/Builder Floor
        </div>
        <div className="filter-option">
          <input type="checkbox" /> Farm House
        </div>
      </div>
      <div className="filter-section">
        <h3>Area</h3>
        <input type="range" min="0" max="100" className="budget-range" />
        <div className="budget-inputs">
          <input type="text" placeholder="Min Area" />
          <input type="text" placeholder="Max Area" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default FilterSlideBar
