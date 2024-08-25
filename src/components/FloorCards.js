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
      image: "https://projectcdn.99acres.com/project_data/e9ab44/block1_23451/3D/14225_B1_1F5_3D.jpg",
      head: "426 sq.ft (39.58 sq.m.)",
      desc: "Carpet Area | 1 BHK",
      price: "1.15 Cr",
      status: "Under Construction",
      date: "Dec'24 possession"
    }
  ],
  "2 BHK Apartment": [
    {
      image: "https://projectcdn.99acres.com/project_data/e9ab44/block1_23451/3D/14225_B1_1F5_3D.jpg",
      head: "600 sq.ft (55.74 sq.m.)",
      desc: "Carpet Area | 2 BHK",
      price: "1.75 Cr",
      status: "Under Construction",
      date: "Dec'24 possession"
    },
    {
      image: "https://projectcdn.99acres.com/project_data/e9ab44/block1_23451/3D/14225_B1_1F5_3D.jpg",
      head: "600 sq.ft (55.74 sq.m.)",
      desc: "Carpet Area | 2 BHK",
      price: "1.75 Cr",
      status: "Under Construction",
      date: "Dec'24 possession"
    }
  ],
  "3 BHK Apartment": [
    {
      image: "https://projectcdn.99acres.com/project_data/e9ab44/block1_23451/3D/14225_B1_1F5_3D.jpg",
      head: "850 sq.ft (78.97 sq.m.)",
      desc: "Carpet Area | 3 BHK",
      price: "2.5 Cr",
      status: "Under Construction",
      date: "Dec'24 possession"
    },
    {
      image: "https://projectcdn.99acres.com/project_data/e9ab44/block1_23451/3D/14225_B1_1F5_3D.jpg",
      head: "600 sq.ft (55.74 sq.m.)",
      desc: "Carpet Area | 2 BHK",
      price: "1.75 Cr",
      status: "Under Construction",
      date: "Dec'24 possession"
    },
    {
      image: "https://projectcdn.99acres.com/project_data/e9ab44/block1_23451/3D/14225_B1_1F5_3D.jpg",
      head: "600 sq.ft (55.74 sq.m.)",
      desc: "Carpet Area | 2 BHK",
      price: "1.75 Cr",
      status: "Under Construction",
      date: "Dec'24 possession"
    },
    {
      image: "https://projectcdn.99acres.com/project_data/e9ab44/block1_23451/3D/14225_B1_1F5_3D.jpg",
      head: "600 sq.ft (55.74 sq.m.)",
      desc: "Carpet Area | 2 BHK",
      price: "1.75 Cr",
      status: "Under Construction",
      date: "Dec'24 possession"
    }
  ],
};

export default function FloorCards({ type }) {
  // Filter data based on the type prop
  const filteredData = data[type] || [];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', margin:"20px" }}>
      {filteredData.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
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
              <Typography variant="h6" color="text.primary">
                {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.status}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.date}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" style={{textTransform: "capitalize"}}>
              Request Callback
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
