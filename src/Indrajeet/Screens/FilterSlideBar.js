import React, { useState } from "react";
import "./FilterSlidebar.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

function FilterSlideBar() {
  const [filters, setFilters] = useState({
    hideSeen: false,
    verified: false,
    budget: { min: "", max: "" },
    propertyType: [],
    bedrooms: [],
    constructionStatus: [],
    postedBy: [],
    area: { min: "", max: "" },
  });

  const handleCheckboxChange = (section, value) => {
    setFilters((prevFilters) => {
      const sectionValues = prevFilters[section];
      const newSectionValues = sectionValues.includes(value)
        ? sectionValues.filter((item) => item !== value)
        : [...sectionValues, value];
      return { ...prevFilters, [section]: newSectionValues };
    });
  };

  const handleRangeChange = (section, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [section]: value,
    }));
  };

  const handleClearAll = () => {
    setFilters({
      hideSeen: false,
      verified: false,
      budget: { min: "", max: "" },
      propertyType: [],
      bedrooms: [],
      constructionStatus: [],
      postedBy: [],
      area: { min: "", max: "" },
    });
  };

  const renderAppliedFilters = () => {
    const appliedFilters = [];

    if (filters.hideSeen) appliedFilters.push("Hide already seen");
    if (filters.verified) appliedFilters.push("Verified Properties");
    if (filters.budget.min || filters.budget.max)
      appliedFilters.push(
        `Budget: ${filters.budget.min || "Any"} - ${
          filters.budget.max || "Any"
        }`
      );
    if (filters.propertyType.length)
      appliedFilters.push(`Property Type: ${filters.propertyType.join(", ")}`);
    if (filters.bedrooms.length)
      appliedFilters.push(`Bedrooms: ${filters.bedrooms.join(", ")}`);
    if (filters.constructionStatus.length)
      appliedFilters.push(
        `Construction Status: ${filters.constructionStatus.join(", ")}`
      );
    if (filters.postedBy.length)
      appliedFilters.push(`Posted By: ${filters.postedBy.join(", ")}`);
    if (filters.area.min || filters.area.max)
      appliedFilters.push(
        `Area: ${filters.area.min || "Any"} - ${filters.area.max || "Any"}`
      );

    return appliedFilters.length ? (
      <div>
        <div className="applied-filters">
          <h3>Applied Filters</h3>
          <Button onClick={handleClearAll}>Clear All</Button>
        </div>
        <div className="applied-list">
          <ul>
            {appliedFilters.map((filter, index) => (
              <li key={index}>{filter}</li>
            ))}
          </ul>
        </div>
      </div>
    ) : null;
  };

  return (
    <div>
      <div className="filter-sidebar">
        {renderAppliedFilters()}
        <div className="filter-section">
          <label className="switch">
            <input
              type="checkbox"
              checked={filters.hideSeen}
              onChange={() =>
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  hideSeen: !prevFilters.hideSeen,
                }))
              }
            />
            <span className="slider round"></span>
          </label>
          <span className="filter-label">Hide already seen</span>
        </div>
        <hr />
        <div className="filter-section">
          <label className="switch">
            <input
              type="checkbox"
              checked={filters.verified}
              onChange={() =>
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  verified: !prevFilters.verified,
                }))
              }
            />
            <span className="slider round"></span>
          </label>
          <span className="filter-label">Verified Properties</span>
        </div>
        <hr />

        <div className="filter-section">
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>
                <h3>Budget</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <input
                type="range"
                min="20"
                max="100"
                className="budget-range"
                onChange={(e) =>
                  handleRangeChange("budget", {
                    ...filters.budget,
                    min: e.target.value,
                  })
                }
              />
              <div className="budget-inputs">
                <select
                  onChange={(e) =>
                    handleRangeChange("budget", {
                      ...filters.budget,
                      min: e.target.value,
                    })
                  }
                >
                  <option value="">Min Budget</option>
                  <option value="10L">10L</option>
                  <option value="50L">50L</option>
                  <option value="75L">75L</option>
                </select>
                <select
                  onChange={(e) =>
                    handleRangeChange("budget", {
                      ...filters.budget,
                      max: e.target.value,
                    })
                  }
                >
                  <option value="">Max Budget</option>
                  <option value="1Cr">1Cr</option>
                  <option value="5Cr">5Cr</option>
                  <option value="10Cr">10Cr</option>
                </select>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="filter-section">
          <Accordion style={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<MdExpandMore />}>
              <Typography>
                <h3>Type of property</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="filter-option">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheckboxChange(
                      "propertyType",
                      "Residential Apartment"
                    )
                  }
                />{" "}
                Residential Apartment
              </div>
              <div className="filter-option">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheckboxChange("propertyType", "Residential Land")
                  }
                />{" "}
                Residential Land
              </div>
              {/* Add more property types as needed */}
            </AccordionDetails>
          </Accordion>
        </div>

        {/* Repeat the structure for other filters like Bedrooms, Construction Status, etc. */}
      </div>
    </div>
  );
}

export default FilterSlideBar;
