import React from 'react';
import Button from '@mui/material/Button';
import RatingFeatures from './RatingFeatures';
import RatingCard from './RatingCard';

function LocalityReview() {
  // Define base styles
  const containerStyles = {
    padding: '20px',
    margin: '2%',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow wrapping for responsiveness
  };

  const headStyles = {
    marginBottom: '16px',
  };

  const headingStyles = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: '0',
  };

  const paragraphStyles = {
    fontSize: '1rem',
    color: '#666',
    margin: '4px 0 0',
  };

  const buttonStyles = {
    marginTop: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    textTransform: 'capitalize',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonHoverStyles = {
    backgroundColor: '#0056b3',
  };

  const part2 = {
    border: "1px solid grey",
    borderRadius: 10,
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: "3%",
  };

  const part2Responsive = {
    display: 'flex',
    flexDirection: 'row', // Default to row layout
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: "3%",
  };

  // Update styles based on screen size
  const updateStylesForScreenSize = () => {
    if (window.matchMedia('(max-width: 480px)').matches) {
      return {
        ...containerStyles,
        padding: '10px',
        margin: '5px',
        part2: {
          ...part2,
          flexDirection: 'column', // Stack items vertically on small screens
        },
      };
    }
    if (window.matchMedia('(max-width: 768px)').matches) {
      return {
        ...containerStyles,
        padding: '15px',
        margin: '10px',
        part2: part2Responsive,
      };
    }
    return {
      ...containerStyles,
      part2: part2,
    };
  };

  const [responsiveStyles, setResponsiveStyles] = React.useState(updateStylesForScreenSize);

  React.useEffect(() => {
    const handleResize = () => {
      setResponsiveStyles(updateStylesForScreenSize);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div style={{ ...responsiveStyles }}>
        <div style={headerStyles}>
          <div style={headStyles}>
            <h6 style={headingStyles}>Locality Reviews</h6>
            <p style={paragraphStyles}>for Laxmi Nagar, Thane West</p>
          </div>
          <Button
            style={buttonStyles}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyles.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyles.backgroundColor)}
          >
            Review your Society Locality
          </Button>
        </div>
        <div style={responsiveStyles.part2}>
          <RatingCard />
          <RatingFeatures />
        </div>
      </div>
    </div>
  );
}

export default LocalityReview;
