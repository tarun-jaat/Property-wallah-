import React, { useState } from 'react';
import FloorCards from './FloorCards';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';

function FloorPlans() {
  const [selectedType, setSelectedType] = useState('1 BHK Apartment'); // Default to '1 BHK Apartment'

  const handleClick = (type) => {
    setSelectedType(type); // Update state when a chip is clicked
  };

  // Determine if the screen is small
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <div style={{ padding: isSmallScreen ? '8px' : '16px' }}>
      <h3>Floor Plans & Pricing</h3>
      <Stack
        direction={isSmallScreen ? 'column' : 'row'} // Stack chips vertically on small screens
        spacing={1}
        style={{ marginBottom: isSmallScreen ? '8px' : '16px' }} // Adjust margin based on screen size
      >
        <Chip 
          label="1 BHK Apartment" 
          onClick={() => handleClick('1 BHK Apartment')} 
          color={selectedType === '1 BHK Apartment' ? 'primary' : 'default'}
        />
        <Chip 
          label="2 BHK Apartment" 
          onClick={() => handleClick('2 BHK Apartment')} 
          color={selectedType === '2 BHK Apartment' ? 'primary' : 'default'}
        />
        <Chip 
          label="3 BHK Apartment" 
          onClick={() => handleClick('3 BHK Apartment')} 
          color={selectedType === '3 BHK Apartment' ? 'primary' : 'default'}
        />
      </Stack>
      <FloorCards type={selectedType} />
    </div>
  );
}

export default FloorPlans;
