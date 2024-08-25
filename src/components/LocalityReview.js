import React from 'react';
import Button from '@mui/material/Button'; // Importing Button component from Material-UI

function LocalityReview() {
  // Define base styles
  const containerStyles = {
    padding: '20px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  };

  const headerStyles = {
    display: 'flex', // Added display flex for alignment
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

  // Add media queries with JavaScript
  const updateStylesForScreenSize = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      return {
        ...containerStyles,
        padding: '15px',
        margin: '10px',
      };
    }
    if (window.matchMedia('(max-width: 480px)').matches) {
      return {
        ...containerStyles,
        padding: '10px',
      };
    }
    return containerStyles;
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
    <div style={responsiveStyles}>
      <style>
        {`
          /* Responsive Styles */
          @media (max-width: 768px) {
            .header {
              flex-direction: column;
              align-items: flex-start;
            }

            .button {
              margin-top: 12px;
            }
          }

          @media (max-width: 480px) {
            .heading {
              font-size: 1rem;
            }

            .button {
              padding: 8px 12px;
              margin-top: 10px;
            }
          }
        `}
      </style>
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
    </div>
  );
}

export default LocalityReview;
