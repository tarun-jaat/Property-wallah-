import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Form from './Form';

function OwnerDetails() {
    const [isFormOpen, setFormOpen] = useState(false);

    // Toggle form visibility
    const openForm = () => setFormOpen(true);
    const closeForm = () => setFormOpen(false);

    const cardContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: "1%",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
    };

    const detailsContainer = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        flex: 1,
    };

    const ownerInfo = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    const imgStyle = {
        borderRadius: '8px',
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
            {ownerData.map((data, index) => (
                <div key={index} style={cardContainer}>
                    <div style={detailsContainer}>
                        <img 
                            src='https://newprojects.99acres.com/projects/sheth_corp_mumbai/sheth_zuri/t77jhg7n.png' 
                            alt='Project Thumbnail'
                            width={100}
                            style={imgStyle}
                        />
                        <div style={ownerInfo}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{data.name}</h3>
                                <FavoriteBorderIcon />
                            </div>
                            <p style={{ margin: 0, fontSize: '1rem' }}>{data.address}</p>
                        </div>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            style={{ textTransform: "capitalize" }}
                            onClick={openForm}
                        >
                            View Number
                        </Button>
                    </div>
                </div>
            ))}

            {/* Popup Form */}
            {isFormOpen && (
                <div style={modalOverlay}>
                    <div style={modalContent}>
                        <Button onClick={closeForm} style={closeButton}>X</Button>
                        <Form type="View number" /> {/* Pass any props needed */}
                    </div>
                </div>
            )}
        </div>
    );
}

const ownerData = [
    {
        name: 'Sheth Zuri',
        address: 'Laxmi Nagar, Thane West',
    },
];

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

export default OwnerDetails;
