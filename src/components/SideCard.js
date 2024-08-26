import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SideCard.css'; // Import the CSS file
import Form from './Form'; // Import the Form component

const data = [
  {
    name: "Sheth Zuri",
    count: 5,
    company: "Ashwin Sheth Group"
  }
];

export default function SideCard() {
  const [isFormOpen, setFormOpen] = React.useState(false);

  // Toggle form visibility
  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  // Define card content inside the component
  const cardContent = (
    <React.Fragment>
      <CardContent>
        <Typography className="card-content" color="text.secondary" gutterBottom>
          Why you should consider {data[0].name}?
        </Typography>
        
        <ul className="feature-list">
          <li>Zero negative space planning</li>
          <li>{data[0].count} Level Podium Parking</li>
          <li>Cross ventilated apartments with natural light and breeze from all corners</li>
        </ul>
        <CardActions className="card-actions">
          <Button size="small">View 4 more</Button>
        </CardActions>
        <Typography className="card-developer" component="div">
          DEVELOPED BY
        </Typography>
        <Typography className="card-developer">
          {data[0].company}
        </Typography>
        <CardActions className="card-actions">
          <Button 
            size="small" 
            variant='contained' 
            style={{ textTransform: "capitalize" }}
            onClick={openForm} // Open the form when clicked
          >
            CONTACT BUILDER
          </Button>
        </CardActions>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box className="card-container">
      <Card className="card" variant="outlined">
        {cardContent}
      </Card>
      
      {/* Popup Form */}
      {isFormOpen && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <Button onClick={closeForm} style={closeButton}>X</Button>
            <Form type="Seller Contact" /> {/* Pass any props needed */}
          </div>
        </div>
      )}
    </Box>
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
