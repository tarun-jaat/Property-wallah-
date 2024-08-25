import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ConstructionIcon from '@mui/icons-material/Construction';
import Typography from '@mui/material/Typography';

const styles = {
  accordion:{
    margin:"2%",
  },
  accordionSummary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#d2f0fa',
    borderRadius: '10px',
    
    marginTop: '20px',
  },
  accordionDetails: {
    
    backgroundColor: '#d2f0fa',
    
  },
  content:{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '10px',
    backgroundColor:"white"
  },
  // accordionIcon: {
  //   marginRight: '8px',
  // },
  heading: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontStyle: 'italic',
  },
};

const data = [
  {
    status: "Under Construction",
    num: 1,
    time: "Dec, 2024"
  }
];

export default function Construction() {
  return (
    <div>
      {data.map((item, index) => (
        <Accordion key={index} style={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            style={styles.accordionSummary}
          >
            <div>
              <Typography variant="p" component="div" >
                CONSTRUCTION STATUS
              </Typography>
              <Typography variant="body1" style={styles.heading}>
                {item.status}
              </Typography>
              <Typography variant="body2" style={styles.subtitle}>
                Completion in {item.time}
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails style={styles.accordionDetails}>
            <div style={styles.content}>
            <ConstructionIcon style={styles.accordionIcon} />
            <div>
                <Typography variant="body2">
                {item.num} phase is Under Construction
              </Typography>
              <Typography variant="body2">
                Completion in {item.time}
              </Typography>
            </div>
              
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
