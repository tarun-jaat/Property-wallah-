import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Form from './Form'; // Ensure this path is correct

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
    }
  ],
};

export default function FloorCards({ type }) {
  const [isFormOpen, setFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Filter data based on the type prop
  const filteredData = data[type] || [];

  const openForm = (item) => {
    setSelectedItem(item);
    setFormOpen(true);
  };

  const closeForm = () => {
    setSelectedItem(null);
    setFormOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', margin: "20px" }}>
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
            <Button
              size="small"
              color="primary"
              style={{ textTransform: "capitalize" }}
              onClick={() => openForm(item)}
            >
              Request Callback
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* Popup Form */}
      {isFormOpen && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <Button onClick={closeForm} style={closeButton}>X</Button>
            <Form type="Request Callback" />
          </div>
        </div>
      )}
    </div>
  );
}

// Modal overlay style
const modalOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

// Modal content style
const modalContent = {
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '70%',
  width: '100%',
  position: 'relative',
};

// Close button style
const closeButton = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
};
