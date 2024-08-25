import React from 'react';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const data = [
    {
        icon: <LocalHospitalIcon />,
        name: "Jupiter Hospital, Thane",
        distance: "400 Meter"
    },
    {
        icon: <FmdGoodIcon />,
        name: "Famous Landmark",
        distance: "500 Meter"
    },
    {
        icon: <StoreMallDirectoryIcon />,
        name: "Local Mall",
        distance: "1 Kilometer"
    },
];

function LocationCards() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {data.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', width: '200px' }}>
          <div style={{ marginRight: '16px' }}>
            {item.icon}
          </div>
          <div>
            <h6 style={{ margin: 0 }}>{item.name}</h6>
            <p style={{ margin: 0 }}>{item.distance}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationCards;
