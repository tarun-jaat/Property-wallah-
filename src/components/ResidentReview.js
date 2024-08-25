import React, { useState } from 'react';
import { Button, Chip, Stack } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import ResidentReviewCard from './ResidentReviewCard';

// Sample data for different types of reviews
const reviewsData = {
  'Recommended': [
    {
      rate: 4.7,
      positive: "It is hardly 5 to 7 mins walk from Korum Mall",
      negative: "Sometimes it finds difficulty in getting vegetables as the municipality can come at any time.",
      person: "Owner of Property",
      time: "Posted 3y ago",
    },
    {
      rate: 4.7,
      positive: "It is hardly 5 to 7 mins walk from Korum Mall",
      negative: "Sometimes it finds difficulty in getting vegetables as the municipality can come at any time.",
      person: "Owner of Property",
      time: "Posted 3y ago",
    },
    {
      rate: 4.7,
      positive: "It is hardly 5 to 7 mins walk from Korum Mall",
      negative: "Sometimes it finds difficulty in getting vegetables as the municipality can come at any time.",
      person: "Owner of Property",
      time: "Posted 3y ago",
    },
    // More recommended reviews...
  ],
  'Negative First': [
    {
      rate: 3.5,
      positive: "Close to the main road",
      negative: "Noisy during peak hours",
      person: "Tenant",
      time: "Posted 1y ago",
    },
    // More negative first reviews...
  ],
  'With Photos': [
    {
      rate: 4.0,
      positive: "Well-maintained and clean",
      negative: "Parking space is limited",
      person: "Resident",
      time: "Posted 6m ago",
    },
    // More reviews with photos...
  ],
  'Recent First': [
    {
      rate: 4.2,
      positive: "Good locality with easy access to amenities",
      negative: "Rent is a bit high",
      person: "Landlord",
      time: "Posted 2w ago",
    },
    // More recent first reviews...
  ],
};

const ResidentHeader = () => {
  return (
    <div style={{ padding: '20px', margin: '2%', boxSizing: 'border-box' }}>
      <div className="container">
        <div className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div className="head" style={{ marginBottom: '16px' }}>
            <h6 className="heading" style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0' }}>Reviews by Residents</h6>
          </div>
          <Button style={{ marginTop: '16px', color: '#007bff', textTransform: 'capitalize', padding: '10px 16px', border: '1px solid #007bff', borderRadius: '4px', cursor: 'pointer' }}>
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

function ResidentReview() {
  const [selectedType, setSelectedType] = useState('Recommended'); // Default to 'Recommended'

  const handleClick = (type) => {
    setSelectedType(type); 
  };

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <ResidentHeader />
      <div style={{ padding: isSmallScreen ? '8px' : '16px' }}>
        <Stack
          direction={isSmallScreen ? 'column' : 'row'} // Stack chips vertically on small screens
          spacing={1}
          style={{ marginBottom: isSmallScreen ? '18px' : '16px' }} // Adjust margin based on screen size
        >
          {Object.keys(reviewsData).map((type) => (
            <Chip
              key={type}
              label={type}
              onClick={() => handleClick(type)}
              color={selectedType === type ? 'primary' : 'default'}
              style={{ margin: isSmallScreen ? '4px 0' : '0' }} // Adjust chip margin on small screens
            />
          ))}
        </Stack>
        <ResidentReviewCard reviews={reviewsData[selectedType]} />
      </div>
    </div>
  );
}

export default ResidentReview;
