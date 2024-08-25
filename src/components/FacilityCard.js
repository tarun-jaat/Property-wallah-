import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// Sample data
const data = [
    {
        image: "https://static.99acres.com/universalapp/img/infinity_pool.png",
        desc: "Infinity Pool",
        bg: "#fcfaca"
    },
    {
        image: "https://static.99acres.com/universalapp/img/swimming_pool.png",
        desc: "Swimming Pool",
        bg: "#d7edfc"
    },
    {
        image: "https://static.99acres.com/universalapp/img/reading_lounge.png",
        desc: "Reading Lounge",
        bg: "#fcfaca"
    },
    {
        image: "https://static.99acres.com/universalapp/img/atm.png",
        desc: "ATM",
        bg: "#d7edfc"
    },
    {
        image: "https://static.99acres.com/universalapp/img/card_room.png",
        desc: "Card Room",
        bg: "#fcfaca"
    },
    {
        image: "https://static.99acres.com/universalapp/img/high_speed_elevators.png",
        desc: "High Speed Elevators",
        bg: "#d7edfc"
    },
    {
        image: "https://static.99acres.com/universalapp/img/waiting_lounge.png",
        desc: "Waiting Lounge",
        bg: "#fcfaca"
    },
    {
        image: "https://static.99acres.com/universalapp/img/sauna.png",
        desc: "Sauna",
        bg: "#d7edfc"
    },
];

export default function FacilityCards() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {data.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 200, backgroundColor: item.bg }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50" // Adjust the height as needed
              image={item.image}
              alt={item.desc}
              // sx={{ objectFit: 'cover' }} // Ensures image covers the available space
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {item.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
