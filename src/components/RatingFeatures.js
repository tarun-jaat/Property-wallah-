import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { borderRadius, display, fontSize, fontWeight, height, margin, padding, width } from '@mui/system';

const data = {
    life:3.7,
    safe:3.7,
    connect:3.9,
    environment:3.8
}
function RatingFeatures() {
  return (
    <div style={main}>
        <div style={head}>
            <p>Rating by Features </p>
            <InfoIcon/>
        </div>
        <div style={featureContainer}>
            <div style={head}>
                <LocalDiningIcon style={{border:"2px solid #2f85d6", padding:5, color:"#2f85d6", borderRadius:"50%"}}/>
                <div>
                    <p style={type}>Lifestyle</p>
                    <p style={type}>{data.life} out of 5</p>
                </div>
            </div>
            <div style={head}>
                <SafetyCheckIcon style={{border:"2px solid #2f85d6", padding:5, color:"#2f85d6", borderRadius:"50%"}}/>
                <div>
                    <p style={type}>Safety</p>
                    <p style={type}>{data.safe} out of 5</p>
                </div>
            </div>
            <div style={head}>
                <DirectionsCarIcon style={{border:"2px solid #2f85d6", padding:5, color:"#2f85d6", borderRadius:"50%"}}/>
                <div>
                    <p style={type}>Connectivity</p>
                    <p style={type}>{data.connect} out of 5</p>
                </div>
            </div>
            <div style={head}>
                <LocalFloristIcon style={{border:"2px solid #2f85d6", padding:5, color:"#2f85d6", borderRadius:"50%"}}/>
                <div>
                    <p style={type}>Environment</p>
                    <p style={type}>{data.environment} out of 5</p>
                </div>
            </div>
        </div>
        <div >
            <p >Popular Mentions</p>
            <div style={head}>
                <div style={bar}></div>
                <p>100%  Positive Mentions</p>
            </div>
        </div>
        <div>
            <div style={head}>
                <ThumbUpOffAltIcon/>
                <p>Likes</p>
                <div >
                    <p style={transport}>Good Public Transport (4)</p>
                </div>
            </div>
        </div>
    </div>
  )
}

const main={
    // margin:'2%',
    backgroundColor: "rgba(255,255,255,0.1)",
    
    width:"50%",
    margin: "auto",
    padding: "2%", // Added padding for better spacing
    borderRadius: "8px"
};
const head={
    display: 'flex',
    alignItems: 'center',
    gap:10,
    flexWrap: 'wrap',
};

const bar={
    width:"70%",
    height:10,
    backgroundColor:"green",
    
};
const transport={
    backgroundColor:"#c9c8c7",
    padding:3
};
const type={
    padding:0,
    fontSize:12,
    fontWeight:"bold",
};
const featureContainer ={
    display: "flex",
    flexWrap:'wrap',
    justifyContent:"center",
    gap:10
}

export default RatingFeatures