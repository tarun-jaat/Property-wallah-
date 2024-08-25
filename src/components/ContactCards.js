import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

// Sample data for different apartment types
const data = {
  "1 BHK Apartment": [
    {
      image: "https://imagecdn.99acres.com/media1/25207/9/504149241O-1720774440397.jpg",
      head: "426 sq.ft (39.58 sq.m.)",
      desc: "Carpet Area | 1 BHK",
      
    }
  ],
  "2 BHK Apartment": [
    {
      image: "https://mediacdn.99acres.com/media1/17071/5/341425902O-1643282831390.jpeg",
      head: "Ashwin Sheth Group",
      desc: "Carpet Area | 2 BHK",
      
    },
    {
      image: "https://imagecdn.99acres.com/media1/25207/9/504149241O-1720774440397.jpg",
      head: "ASDPL",
      desc: "Carpet Area | 2 BHK",
      
    }
  ],
  "3 BHK Apartment": [
    {
      image: "https://mediacdn.99acres.com/media1/17071/5/341425902O-1643282831390.jpeg",
      head: "Urban Pillar",
      desc: "Carpet Area | 3 BHK",
      
    },
    {
      image: "https://imagecdn.99acres.com/media1/25207/9/504149241O-1720774440397.jpg",
      head: "Grow More Properties",
      desc: "Carpet Area | 2 BHK",
      
    },
    
  ],
};

export default function ContactCards({ type }) {
  // Filter data based on the type prop
  const filteredData = data[type] || [];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', margin:"20px"}}>
      {filteredData.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="50%"
              width="50%"
              image={item.image}
              alt={item.desc}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.head}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" style={{textTransform: "capitalize"}}>
              View Contact
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
