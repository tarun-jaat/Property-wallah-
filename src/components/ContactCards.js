import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Form from './Form'; // Import your Form component

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
        <Card key={index} sx={{ maxWidth: 300 }}>
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
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              style={{ textTransform: "capitalize" }}
              onClick={() => openForm(item)}
            >
              View Contact
            </Button>
          </CardActions>
        </Card>
      ))}

      {/* Popup Form */}
      {isFormOpen && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <Button onClick={closeForm} style={closeButton}>X</Button>
            {selectedItem && <Form type="View Contact" />}
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
