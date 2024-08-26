import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ResidentReview from "../components/ResidentReview"
import SocietyReview from './SocietyReview';
import { Button } from '@mui/material';
import Explore from './Explore';
import BuiderDetails from './BuiderDetails';
import RatingFeatures from './RatingFeatures';
import LocalityReview from './LocalityReview';
import FloorPlan from './FloorPlan';

const data = {
    
        projectName:"Vajra Towers",
        type:"3BHK Flat/Apartment",
        address:"Bawadia Kalan, Bhopal, M P"
    
}


const WhyChoose = () =>{
    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <h5>Why Choose this Project?</h5>
                <ul>
                    <li>Landscaped Garden with seating.</li>
                    <li>Excellent Lighting and Ventilation.</li>
                    <li>Well equipped with all the amenities to facilitate the needs of the residents.</li>
                </ul>
            </CardContent>
            
        </Card>
    )
}
const ImageBack = () =>{
    return(
        <div style={image}>
            <div style={overlay}>
                <div style={apartment}>
                    <p style={text}>{data.type}</p>
                    <h1 style={text1}>{data.projectName}</h1>
                    <p style={text}>{data.address}</p>
                </div>
                <WhyChoose/>
            </div>
            
        </div>
    )
}

const detailsData = {
    money:"89.65 Lac",
    base:"5397",
    nSqFt:"1661",
    area:"Super Built Area",
    ready:"Ready to move",
    time:"December 2021"
}
const ShowDetails = () =>{
    return(
        <div>
            <div style={main}>
                <div style={part1}>
                    <div >
                        <p style={price}>{detailsData.money}</p>
                        <p>{detailsData.base}</p>
                    </div>
                    <div>
                        <p style={readyTxt}>{detailsData.nSqFt} sq.ft.</p>
                        <p>{detailsData.area}</p>
                    </div>
                    <div>
                        <p style={readyTxt}>{detailsData.ready}</p>
                        <p>Completed in: {detailsData.time}</p>
                    </div>
                </div>
                <div style={part2}> 
                    <Button variant='contained'>View Phone Number</Button>
                    <Button>Shortlist</Button>
                </div>
            </div>
        </div>
    )
}


function ChooseProject() {
  return (
    <div>
        <ImageBack/>
        <FloorPlan/>
        <ShowDetails/>
        <Explore/>
        <SocietyReview/>
        <ResidentReview/>
        <LocalityReview/>
        <BuiderDetails/>
        

    </div>
  )
}

const image = {
    backgroundImage: 'url("https://newprojects.99acres.com/projects/sai_builders_bhopal/sai_vajra_towers/images/59me3u9f.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    height: '40%', 
    padding: '20px', 
    color: 'white', 
    
};
const overlay={
    display: "flex",
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "space-between",
     backgroundColor: 'rgba(0, 0, 0, 0.7)',
   padding:'10px'
     
};
const apartment={
    padding:0
};
const text ={
    fontSize:30,
    padding:0,
    margin:0
};
const text1={
    fontSize:50,
    margin:0
};
const main={
    display:'flex',
    flexWrap:"wrap",
    alignItems: 'center',
    justifyContent:"space-between",
    margin:"3%",
    backgroundColor:"#b1b1b3",
    padding:"20px"
};
const part1={
    display:"flex",
    alignItems: 'center',
    justifyContent:"center",
    gap:30
};
const part2={
    display:"flex",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"center",
};
const readyTxt={
    fontSize:25
};
const price = {
    fontSize:30,
    fontWeight: 'bold',
    color:"#3d3d3d"
}

export default ChooseProject