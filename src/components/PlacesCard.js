import React from 'react';
import { Button } from '@mui/material';

// Example card data array
const cardData = [
  {
    image: "https://newprojects.99acres.com/projects/lucky_real_estate_developers/lucky_balaji_parisar/images/c5jkmzv5_med.jpg",
    name: "Lucky Balaji Parisar Phase 2",
    desc: "3,4 BHK House in Ayoodhya Bypass, Bhopal",
    threebhk: "1.11 - 1.35 Cr",
    fourbhk: "1.6 Cr",
    about: "Lucky Balaji Parisar Phase 2 brings 3,4 BHK Villa in Ayodhya",
    builder: "Lucky Real Estate Developers"
  },
  {
    image: "https://newprojects.99acres.com/projects/lucky_real_estate_developers/lucky_balaji_parisar/images/c5jkmzv5_med.jpg",
    name: "Lucky Balaji Parisar Phase 2",
    desc: "3,4 BHK House in Ayoodhya Bypass, Bhopal",
    threebhk: "1.11 - 1.35 Cr",
    fourbhk: "1.6 Cr",
    about: "Lucky Balaji Parisar Phase 2 brings 3,4 BHK Villa in Ayodhya",
    builder: "Lucky Real Estate Developers"
  },
  {
    image: "https://newprojects.99acres.com/projects/lucky_real_estate_developers/lucky_balaji_parisar/images/c5jkmzv5_med.jpg",
    name: "Lucky Balaji Parisar Phase 2",
    desc: "3,4 BHK House in Ayoodhya Bypass, Bhopal",
    threebhk: "1.11 - 1.35 Cr",
    fourbhk: "1.6 Cr",
    about: "Lucky Balaji Parisar Phase 2 brings 3,4 BHK Villa in Ayodhya",
    builder: "Lucky Real Estate Developers"
  },
];

const cardContainerStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '20px',
  justifyContent: 'center',
};

const cardStyles = {
  display: 'flex',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%', 
  boxSizing: 'border-box',
  overflow: 'hidden',
  flexDirection: 'row',
};

const imageStyles = {
  flex: '1 1 40%',
  overflow: 'hidden',
};

const contentStyles = {
  flex: '1 1 60%',
  padding: '16px',
};

const titleStyles = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
};

const descStyles = {
  fontSize: '1rem',
  color: '#666',
  margin: '0 0 16px 0',
};

const priceSectionStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '16px',
};

const priceBoxStyles = {
  textAlign: 'center',
};

const buttonContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center', // Ensure buttons and builder info are vertically centered
};

const buttonStyles = {
  textTransform: 'capitalize',
  padding: '10px 16px',
};

// Responsive media queries within the component
const mediaQueries = `
  @media (max-width: 768px) {
    .card {
      flex-direction: column; 
      width: 100%; 
    }
    .price-section {
      flex-direction: column;
    }
  }
`;

const PlacesCard = () => {
  return (
    <div>
      <style>
        {`
          .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            justify-content: center;
          }

          .card {
            display: flex;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            flex-direction: row;
          }

          .card img {
            flex: 1 1 40%;
            width: 100%;
            height: auto;
          }

          .card-content {
            flex: 1 1 60%;
            padding: 16px;
          }

          .card-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin: 0 0 8px 0;
          }

          .card-desc {
            font-size: 1rem;
            color: #666;
            margin: 0 0 16px 0;
          }

          .price-section {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
          }

          .price-box {
            text-align: center;
          }

          .button-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .button {
            text-transform: capitalize;
            padding: 10px 16px;
          }

          ${mediaQueries}
        `}
      </style>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="card" style={cardStyles}>
            <img src={card.image} alt={card.name} style={imageStyles} />
            <div className="card-content" style={contentStyles}>
              <h5 className="card-title" style={titleStyles}>{card.name}</h5>
              <p className="card-desc" style={descStyles}>{card.desc}</p>
              <div className="price-section" style={priceSectionStyles}>
                <div className="price-box" style={priceBoxStyles}>
                  <p>3 BHK Villa</p>
                  <h6>{card.threebhk}</h6>
                </div>
                <div className="price-box" style={priceBoxStyles}>
                  <p>4 BHK Villa</p>
                  <h6>{card.fourbhk}</h6>
                </div>
              </div>
              <p>{card.about}</p>
              <div className="button-container" style={buttonContainerStyles}>
                <div className="builder-info">
                    <p>Builder</p>
                    <h6>{card.builder}</h6>
                </div>
                <Button className="button" style={buttonStyles}>Brochure</Button>
                <Button className="button" style={buttonStyles}>View Number</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesCard;
