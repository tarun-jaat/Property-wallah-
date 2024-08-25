import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ResidentReviewCard = ({ reviews }) => {
  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap', // Allow cards to wrap to the next line on small screens
    gap: '16px', // Space between cards
    padding: '20px',
    margin: 'auto',
    boxSizing: 'border-box',
  };

  const cardStyles = {
    padding: '20px',
    margin: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    boxSizing: 'border-box',
    flex: '1 1 100%', // Flex-grow, flex-shrink, and flex-basis
  };

  const ratingStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  };

  const reviewTextStyles = {
    marginBottom: '16px',
  };

  const reviewSectionStyles = {
    marginBottom: '16px',
  };

  const reviewTitleStyles = {
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const personInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #eee',
    paddingTop: '16px',
  };

  const personIconStyles = {
    marginRight: '8px',
  };

  return (
    <div style={containerStyles}>
      {reviews.map((review, index) => (
        <div key={index} style={cardStyles}>
          <div style={ratingStyles}>
            <p style={{ margin: '0', marginRight: '8px' }}>{review.rate}</p>
            <StarIcon color="primary" />
          </div>
          <div style={reviewTextStyles}>
            <div style={reviewSectionStyles}>
              <p style={reviewTitleStyles}>POSITIVES</p>
              <p>{review.positive}</p>
            </div>
            <div style={reviewSectionStyles}>
              <p style={reviewTitleStyles}>NEGATIVES</p>
              <p>{review.negative}</p>
            </div>
          </div>
          <div style={personInfoStyles}>
            <AccountCircleIcon style={personIconStyles} />
            <div>
              <h6 style={{ margin: '0' }}>{review.person}</h6>
              <p style={{ margin: '0' }}>{review.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResidentReviewCard;
