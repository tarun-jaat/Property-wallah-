import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function SocietyReviewCard() {
  return (
    <Card sx={{ width: "100%", maxWidth: 600, margin: 'auto' }}>
      <CardMedia
        sx={{ height: 300, backgroundSize: 'cover', backgroundPosition: 'center' }}
        image="https://static.99acres.com/images/locationReviews/writeNewReview.png"
        title="Review this Society"
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h6" component="div">
          Review this Society
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We don't have sufficient reviews to display. Write a review & help others to make the right choice
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" variant="contained">Review this Society</Button>
      </CardActions>
    </Card>
  );
}

export default SocietyReviewCard;
