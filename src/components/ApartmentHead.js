import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from './Form';

const data = [
    {
        name: '1.15 - 2.11 Cr + Charges',
        price: "PRICE RANGE",
        num: '1,2,3 BHK Apartment',
    },
];

function ApartmentHead() {
    const [isFormOpen, setFormOpen] = React.useState(false);

    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    const cardContainer = {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-between',
        margin: "2%",
        width: '100%',
        padding: '16px',
        backgroundColor: '#fff',
        marginBottom: '20px',
        marginTop: "20px"
    };

    const detailsContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '12px',
    };

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
                    <Button
                        style={{ textTransform: "capitalize" }}
                        onClick={openForm}
                    >
                        Download Brochure
                    </Button>
                </div>
            </div>

            {/* Popup Form */}
            {isFormOpen && (
                <div style={modalOverlay}>
                    <div style={modalContent}>
                        <Button onClick={closeForm} style={closeButton}>X</Button>
                        <Form type="Download Brochure" closeForm={closeForm} />
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
    maxWidth: '500px',
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

export default ApartmentHead;
