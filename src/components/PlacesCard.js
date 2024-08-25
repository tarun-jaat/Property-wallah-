import React from 'react';
import { Button, Box, Typography } from '@mui/material';

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
  // Additional card objects...
];

const PlacesCard = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px',
      justifyContent: 'center',
      gap: '20px',
    }}>
      {cardData.map((card, index) => (
        <Box key={index} sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on medium and up
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          alignItems: 'center',
          boxSizing: 'border-box',
          transition: 'transform 0.3s ease',
          width: { xs: '100%', sm: 'calc(50% - 20px)' }, // Full width on extra small screens, half width on small and up
          cursor: 'pointer',
          margin: '10px',
          padding: '10px',
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' }, // Center image on small screens, left align on medium and up
            width: { xs: '100%', md: 'auto' },
            marginRight: { xs: '0', md: '10px' }, // No margin on small screens, margin on medium and up
          }}>
            <img src={card.image} alt={card.name} style={{
              width: '100%',
              height: 'auto',
              maxWidth: '250px',
              borderRadius: '8px',
              margin: '0 auto', // Center image horizontally within the container
            }} />
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '15px',
            boxSizing: 'border-box',
            width: '100%',
          }}>
            <Typography variant="h5" sx={{
              fontSize: { xs: '1rem', sm: '1.2rem' }, // Font size for small and up screens
              fontWeight: 'bold',
              margin: '0 0 5px',
            }}>
              {card.name}
            </Typography>
            <Typography sx={{
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              color: '#666',
              margin: '0 0 10px',
            }}>
              {card.desc}
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens, horizontally on medium and up
              justifyContent: { xs: 'flex-start', sm: 'space-around' }, // Adjust alignment on different screen sizes
              margin: '10px 0',
            }}>
              <Box sx={{
                textAlign: 'center',
                marginBottom: { xs: '10px', sm: '0' }, // Margin bottom for small screens
              }}>
                <Typography sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  margin: '2px 0',
                }}>
                  3 BHK Villa
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  fontWeight: 'bold',
                }}>
                  {card.threebhk}
                </Typography>
              </Box>
              <Box sx={{
                textAlign: 'center',
              }}>
                <Typography sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  margin: '2px 0',
                }}>
                  4 BHK Villa
                </Typography>
                <Typography sx={{
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  fontWeight: 'bold',
                }}>
                  {card.fourbhk}
                </Typography>
              </Box>
            </Box>
            <Typography sx={{
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              margin: '2px 0',
            }}>
              {card.about}
            </Typography>
            <Typography sx={{
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              margin: '2px 0',
            }}>
              Builder: {card.builder}
            </Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons vertically on small screens, horizontally on medium and up
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: '10px',
              marginTop: '10px',
            }}>
              <Button variant="outlined" sx={{
                textTransform: 'capitalize',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                borderColor: 'blue',
                color: 'blue',
                '&:hover': {
                  borderColor: 'darkblue',
                  color: 'darkblue',
                }
              }}>
                Brochure
              </Button>
              <Button variant="outlined" sx={{
                textTransform: 'capitalize',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                borderColor: 'blue',
                color: 'blue',
                '&:hover': {
                  borderColor: 'darkblue',
                  color: 'darkblue',
                }
              }}>
                View Number
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PlacesCard;
