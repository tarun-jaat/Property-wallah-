import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SideCard.css'; // Import the CSS file

const data = [
  {
    name: "Sheth Zuri",
    count: 5,
    company: "Ashwin Sheth Group"
  }
];

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
        <Button size="small">View 4 more -&gt;</Button>
      </CardActions>
      <Typography className="card-developer" component="div">
        DEVELOPED BY
      </Typography>
      <Typography className="card-developer">
        {data[0].company}
      </Typography>
      <CardActions className="card-actions">
        <Button size="small" style={{textTransform: "lowercase"}}>CONTACT BUILDER</Button>
      </CardActions>
    </CardContent>
  </React.Fragment>
);

export default function SideCard() {
  return (
    <Box className="card-container">
      <Card className="card" variant="outlined">
        {cardContent}
      </Card>
    </Box>
  );
}
