import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick'; // Import react-slick for carousel
import { useMediaQuery } from '@mui/material';

// Sample data
const ApartmentData = [
  {
    type: '1 BHK Apartment',
    area: 'Carpet Area',
    land: '426 sq.ft (39.58 sq.m.)',
    money: '1.15 Cr ',
    charges: '+ Charges'
  },
  {
    type: '1 BHK Apartment',
    area: 'Carpet Area',
    land: '426 sq.ft (39.58 sq.m.)',
    money: '1.15 Cr ',
    charges: '+ Charges'
  },
  {
    type: '1 BHK Apartment',
    area: 'Carpet Area',
    land: '426 sq.ft (39.58 sq.m.)',
    money: '1.15 Cr ',
    charges: '+ Charges'
  },
  {
    type: '1 BHK Apartment',
    area: 'Carpet Area',
    land: '426 sq.ft (39.58 sq.m.)',
    money: '1.15 Cr ',
    charges: '+ Charges'
  },
  {
    type: '1 BHK Apartment',
    area: 'Carpet Area',
    land: '426 sq.ft (39.58 sq.m.)',
    money: '1.15 Cr ',
    charges: '+ Charges'
  },
  {
    type: '1 BHK Apartment',
    area: 'Carpet Area',
    land: '426 sq.ft (39.58 sq.m.)',
    money: '1.15 Cr ',
    charges: '+ Charges'
  },
  // Add more data as needed
];

// Carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ApartmentDetails() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  // Determine if carousel should be shown based on number of cards and screen size
  const showCarousel = ApartmentData.length > (isLargeScreen ? 3 : 1);

  return (
    <div style={{ padding: '20px' }}>
      {showCarousel ? (
        <Slider {...settings}>
          {ApartmentData.map((apartment, index) => (
            <Card key={index} sx={{ maxWidth: 300, margin: '0 auto' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {apartment.type}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {apartment.area}: {apartment.land}
                </Typography>
                <Typography variant="body1">
                  {apartment.money} {apartment.charges}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {ApartmentData.map((apartment, index) => (
            <Card key={index} sx={{ maxWidth: 300 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {apartment.type}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {apartment.area}: {apartment.land}
                </Typography>
                <Typography variant="body1">
                  {apartment.money} {apartment.charges}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default ApartmentDetails;
