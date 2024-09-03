import React, { useRef, useState, useEffect } from "react";
import "./ProjectViewPage.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const ProjectCard = ({ image, name, location, price }) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{ backgroundColor: image ? "transparent" : "#157be7" }}
      >
        {image ? <img src={image} alt={name} /> : <div className="no-image" />}
        <div className="rera-tag">✔ RERA</div>
      </div>
      <div className="project-info">
        <h4 className="project-name">{name}</h4>
        <p className="project-location">{location}</p>
        <p className="project-price">{price}</p>
      </div>
    </div>
  );
};

function ProjectViewPage() {
  const projects = [
    {
      image:
        "https://newprojects.99acres.com/projects/dk_constructions/dk_24_carat_phase_1/images/erzvrrq0_med.jpg",
      name: "Shaligram Rud...",
      location: "Bawadia Kalan, ...",
      price: "₹ 1 Cr",
    },
    {
      image:
        "https://newprojects.99acres.com/projects/nirupam_associates_/nirupam_royal_palm/images/q4h4eq0z_med.jpg",
      name: "Aryavrat Britis...",
      location: "Hoshangabad R...",
      price: "₹ 24 L - 2.45 Cr",
    },
    {
      image:
        "https://newprojects.99acres.com/projects/agrawal_builders_/agrawal_sagar_life_style_towers_/images/ck0ydz92_med.jpg",
      name: "Century Heights",
      location: "Hoshangabad R...",
      price: "₹ 50 - 90 L",
    },
    {
      image:
        "https://newprojects.99acres.com/projects/drishti_builders/drishti_city/images/1ph3t7ra_med.jpg",
      name: "Shikhar Estate...",
      location: "Airport Road, B...",
      price: "Price on Request",
    },
    {
      image:
        "https://newprojects.99acres.com/projects/aakar_builders_and_developers/aakar_canal_kinship/images/4rmcd7ny_med.jpg",
      name: "Chetanya Gran...",
      location: "Bawadia Kalan, ...",
      price: "Price on Request",
    },
    {
      image:
        "https://newprojects.99acres.com/projects/agrawal_builders_/agrawal_sagar_life_style_towers_/images/ck0ydz92_med.jpg",
      name: "Century Heights",
      location: "Hoshangabad R...",
      price: "₹ 50 - 90 L",
    },
    {
      image:
        "https://newprojects.99acres.com/projects/drishti_builders/drishti_city/images/1ph3t7ra_med.jpg",
      name: "Shikhar Estate...",
      location: "Airport Road, B...",
      price: "Price on Request",
    },
    {
      image:
        "https://newprojects.99acres.com/projects/aakar_builders_and_developers/aakar_canal_kinship/images/4rmcd7ny_med.jpg",
      name: "Chetanya Gran...",
      location: "Bawadia Kalan, ...",
      price: "Price on Request",
    },
  ];

  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjectsCount = 5;

  const scroll = (direction) => {
    let newIndex;
    if (direction === "left") {
      newIndex = Math.max(currentIndex - 1, 0);
    } else {
      newIndex = Math.min(
        currentIndex + 1,
        projects.length - visibleProjectsCount
      );
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left:
          (scrollWidth - containerWidth) *
          (currentIndex / (projects.length - visibleProjectsCount)),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="projects">
      <div className="header">
        <h2>Projects in Bhopal</h2>
        <a href="/view-all" className="view-all-link">
          View All
        </a>
      </div>
      <p className="subheading">Inspired by your search preferences</p>

      <div className="scroll-wrapper">
        {currentIndex > 0 && (
          <button className="scroll-button left" onClick={() => scroll("left")}>
            <FaArrowLeftLong />
          </button>
        )}
        <div className="projects-container" ref={scrollContainerRef}>
          {projects
            .slice(currentIndex, currentIndex + visibleProjectsCount)
            .map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                name={project.name}
                location={project.location}
                price={project.price}
              />
            ))}
        </div>
        {currentIndex + visibleProjectsCount < projects.length && (
          <button
            className="scroll-button right"
            onClick={() => scroll("right")}
          >
            <FaArrowRightLong />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectViewPage;
