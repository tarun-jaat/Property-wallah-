import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// Sample data
const data = [
    {
        name: '1.15 - 2.11 Cr + Charges',
        price: "PRICE RANGE",
        num: '1,2,3 BHK Apartment',
    },
];

function ApartmentHead() {
    // Styles for the card container
    const cardContainer = {
        display: 'flex',
        alignItems:"center",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin:"2%",
        width: '100%',
        padding: '16px',
        backgroundColor: '#fff',
        marginBottom: '20px',
        marginTop:"20px"
    };

    // Styles for the heading and details container
    const detailsContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '12px',
    };

    // Styles for the button container
    const buttonContainer = {
        marginTop: '12px',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={cardContainer}>
                <div style={detailsContainer}>
                    <Typography variant="h5" component="h3" style={{ margin: 0 }}>
                        {data[0].name}
                    </Typography>
                    <Typography variant="p" color="textSecondary" style={{ margin: '4px 0' }}>
                        {data[0].price}
                    </Typography>
                    <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                        {data[0].num}
                    </Typography>
                </div>
                <div style={buttonContainer}>
                    <Button style={{textTransform: "capitalize"}}>Download Brochure</Button>
                </div>
            </div>
        </div>
    );
}

export default ApartmentHead;
