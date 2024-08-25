import { Button } from '@mui/material';
import React from 'react';

function MoreAbout() {
  return (
    <div style={{ padding: '16px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
            <h6 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>More about Sheth Zuri</h6>
            <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                Sheth Zuri by Ashwin Sheth Group is one of the well-known under-construction projects in Laxmi Nagar, offering low budget apartments. The project was launched in Sep, 2016 as one of the most affordable addresses in Thane.
            </p>
        </div>
        <div style={{ marginBottom: '24px' }}>
            <Button 

              style={{  color:"black", textTransform:"Capitalize",fontWeight:"bold" }}
            >
                Interiors and Other Specifications
            </Button>
            <p style={{ fontSize: '0.875rem', }}>
                LIVING AND DINING ROOM: Vitified Extensive electrical layout Windows
            </p>
        </div>
        <hr></hr>
    </div>
  );
}

export default MoreAbout;
