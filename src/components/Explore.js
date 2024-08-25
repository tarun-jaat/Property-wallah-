import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const ExploreCard = ({ head, data }) => {
  return (
    <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
      <CardContent>
        {/* Render the heading */}
        <Typography variant="h6" component="div" gutterBottom>
          {head}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  );
};







const exploreData = [
    {
        head:"What's great here!",
        one:"Bawadia Kalan is a mid-segment locality, offering ample housing inventory in 2BHK and 3BHK configurations",
        two:"The locale hosts a mix of properties including residential apartments, villas and independent floors",
        three:"Hoshangabad Road, NH-12, NH-46 are major routes, nearby residential areas include Pallavi Nagar and Shahpura",
        four:"Raja Bhoj International Airport is about 23km from the locale, accessible via Airport "
    },
    {
        head:"What needs attention",
        one:"Absence of proper signage and dividers on newly built Bawadia Kalan ROB makes it an accident prone spot",
        two:"Open defecation and poor sewage disposal system is still a major problem in the locale",
        three:"Visible heaps of garbage along road sides and irregular waste collection",
        four:"Patchy and broken roads coupled with potholes cause menace to motorists in the local."
    }
];
const Explore = () => {
  return (
    <div>
      <Box sx={{ margin:"3%"}}>
        <Typography variant="h4" gutterBottom>
          Explore Bawadia Kalan
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Bhopal, Pincode - 462026
        </Typography>
         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {exploreData.map((item, index) => (
            <ExploreCard
              key={index}
              head={item.head}
              data={[
                item.one,
                item.two,
                item.three,
                item.four
              ]}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Explore;