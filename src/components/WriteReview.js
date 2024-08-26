import React, { useState } from 'react';
import { Button } from '@mui/material';

const containerStyles = {
  padding: '20px',
  margin: 'auto',
  maxWidth: '600px',
  boxSizing: 'border-box',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const textareaStyles = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const buttonStyles = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};

const buttonHoverStyles = {
  backgroundColor: '#0056b3',
};

function WriteReview({ addReview }) {
  const [locality, setLocality] = useState('');
  const [rating, setRating] = useState('');
  const [positives, setPositives] = useState('');
  const [negatives, setNegatives] = useState('');

  const handleLocalityChange = (event) => {
    setLocality(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handlePositivesChange = (event) => {
    setPositives(event.target.value);
  };

  const handleNegativesChange = (event) => {
    setNegatives(event.target.value);
  };

  const handleSubmit = () => {
    const newReview = {
      rate: rating,
      positive: positives,
      negative: negatives,
      person: 'Anonymous', // Or get this from the user session
      time: new Date().toLocaleDateString(),
    };
    
    // Reset form fields
    setLocality('');
    setRating('');
    setPositives('');
    setNegatives('');
  };

  return (
    <div style={containerStyles}>
      <h1>Write a Review</h1>
      <input
        type='text'
        placeholder='Enter your Locality'
        value={locality}
        onChange={handleLocalityChange}
        style={inputStyles}
      />
      <input
        type='text'
        placeholder='Enter your Rating'
        value={rating}
        onChange={handleRatingChange}
        style={inputStyles}
      />
      <label>Positives</label>
      <textarea
        rows="4"
        value={positives}
        onChange={handlePositivesChange}
        style={textareaStyles}
      ></textarea>
      <label>Negatives</label>
      <textarea
        rows="4"
        value={negatives}
        onChange={handleNegativesChange}
        style={textareaStyles}
      ></textarea>
      <Button
        style={buttonStyles}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor}
        onClick={handleSubmit}
      >
        Write Review
      </Button>
    </div>
  );
}

export default WriteReview;
