import React from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function OwnerDetails() {
    const cardContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        backgroundColor: '#fff',
        marginBottom: '16px', // Add margin for spacing between cards
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
                        <Button variant="contained" style={{ textTransform: "capitalize" }}>
                            View Number
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}

const ownerData = [
    {
        name: 'Sheth Zuri',
        address: 'Laxmi Nagar, Thane West',
    },
];

export default OwnerDetails;
