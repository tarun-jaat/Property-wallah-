import React from 'react';
import PropertyCard from './PropertyCard';
import ProjectViewPage from './ProjectViewPage';
import FAQ from './FAQ';
import PropertyHeading from './PropertyHeading';

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      image: 'https://newprojects.99acres.com/projects/vrandawan_construction/sage_golden_spring/images/3dtkp4i_1715765235_492125706_med.jpg',
      title: 'Sage Golden Spring',
      description: '1, 2, 3 BHK Apartment, 3, 4, 5 BHK Villa in Ayodhya Bypass, Bhopal',
      price: 'Price on Request',
      details: ['Ready To Move', 'Since Mar, 2023'],
    },
    {
      id: 2,
      image: 'https://imagecdn.99acres.com/media1/25312/5/506245067M-1721665204006.jpg',
      title: 'Sigma Greens',
      description: '2, 3 BHK Villa',
      price: '₹ 36.5 - 65 L',
      details: ['Ayodhya Bypass, Bhopal', 'Possession by Feb 2024'],
    },
  ];

  return (
    <div className="property-list">
      <PropertyHeading/>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          image={property.image}
          title={property.title}
          description={property.description}
          price={property.price}
          details={property.details}
        />
      ))}
      <ProjectViewPage/>
      {/* <FAQ/> */}
    </div>
  );
};

export default PropertyList;