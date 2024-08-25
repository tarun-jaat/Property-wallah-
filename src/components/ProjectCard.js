import React from 'react';

const data = [
    {
        "image": "https://newprojects.99acres.com/projects/shaligram_developers_bhopal/shaligram_rudraksh_kingston/images/3m9xs3y_1714736395_489894076_med.jpg",
        "name": "Shaligram",
        "desc": "Bawadia Kalan",
        "price": "1.49 - 3.58 Cr"
    },
    {
        "image": "https://newprojects.99acres.com/projects/shaligram_developers_bhopal/shaligram_rudraksh_kingston/images/3m9xs3y_1714736395_489894076_med.jpg",
        "name": "Shaligram",
        "desc": "Bawadia Kalan",
        "price": "1.49 - 3.58 Cr"
    },
    {
        "image": "https://newprojects.99acres.com/projects/shaligram_developers_bhopal/shaligram_rudraksh_kingston/images/3m9xs3y_1714736395_489894076_med.jpg",
        "name": "Shaligram",
        "desc": "Bawadia Kalan",
        "price": "1.49 - 3.58 Cr"
    },
    {
        "image": "https://newprojects.99acres.com/projects/shaligram_developers_bhopal/shaligram_rudraksh_kingston/images/3m9xs3y_1714736395_489894076_med.jpg",
        "name": "Shaligram",
        "desc": "Bawadia Kalan",
        "price": "1.49 - 3.58 Cr"
    },
    {
        "image": "https://newprojects.99acres.com/projects/shaligram_developers_bhopal/shaligram_rudraksh_kingston/images/3m9xs3y_1714736395_489894076_med.jpg",
        "name": "Shaligram",
        "desc": "Bawadia Kalan",
        "price": "1.49 - 3.58 Cr"
    },
    
    {
        "image": "https://newprojects.99acres.com/projects/shaligram_developers_bhopal/shaligram_rudraksh_kingston/images/3m9xs3y_1714736395_489894076_med.jpg",
        "name": "Shaligram",
        "desc": "Bawadia Kalan",
        "price": "1.49 - 3.58 Cr"
    },
    {
        "image": "https://newprojects.99acres.com/projects/shaligram_developers_bhopal/shaligram_rudraksh_kingston/images/3m9xs3y_1714736395_489894076_med.jpg",
        "name": "Shaligram",
        "desc": "Bawadia Kalan",
        "price": "1.49 - 3.58 Cr"
    },
    // Add more objects if needed
];

function ProjectCard() {
  return (
    <div style={cardContainerStyles}>
      {data.map((item, index) => (
        <div key={index} style={cardStyles}>
          <div style={imageContainerStyles}>
            <img src={item.image} alt={item.name} style={imageStyles} />
          </div>
          <p style={label}>RERA</p>
          <div style={contentStyles}>
            <p style={nameStyles}>{item.name}</p>
            <p style={descStyles}>{item.desc}</p>
            <p style={priceStyles}>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Inline styles
const cardContainerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'center',
  padding: '20px',
  
};

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  cursor:"pointer",
  textAlign: 'center' // Center text inside the card
};

const imageContainerStyles = {
  width: '100%',
  height: 'auto',
  display: 'flex',
  justifyContent: 'center', // Center image horizontally
  alignItems: 'center',         // Add margin for spacing
};

const imageStyles = {
  width: '100px',           // Set width for the circle
  height: '100px',          // Set height for the circle
  borderRadius: '50%',      // Makes the image circular
  objectFit: 'cover' ,
  padding:2,
  border: "2px solid blue"       // Ensures the image covers the circle without distortion
};
const label = {
    backgroundColor:"#04858a",
    color: "white",
    fontSize:10,
    width:"30%",
    margin:"auto",
    padding:2
};
const contentStyles = {
  padding: '16px'
};

const nameStyles = {
  fontSize: '1rem',
  fontWeight: 'bold',
  margin: '0 0 '
};

const descStyles = {
  fontSize: '0.9rem',
  color: '#666',
  margin: '0 0 '
};

const priceStyles = {
  fontSize: '0.9rem',
  fontWeight: 'bold',
  margin: '0'
};

export default ProjectCard;
