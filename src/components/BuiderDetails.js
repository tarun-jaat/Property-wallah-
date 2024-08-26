import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';

function BuiderDetails() {
  return (
    <div style={main}>
        <div style={head}>
            <AccountBoxIcon style={{color:"blue", fontSize:50}}/>
            <div>
                <p>Bilder Name</p>
                <p style={{fontSize:10, margin:0}}>VAJRA TOWER SALES TEAM</p>
            </div>
        </div>
        <div style={input}>
            <p>You are 
                <input type="radio" name='person'/>
                <label>Individual</label>
                <input type="radio" name='peson'/>
                <label>Dealer</label>
            </p>
            <p>Your reason to buy is 
                <input type="radio" name='buy'/>
                <label>Investment</label>
                <input type="radio" name='buy'/>
                <label>Self Use</label>
            </p>
            <div>
                <input type='text' placeholder='Name' style={input}/>
                <br/>
            <input type='email' placeholder='Email' style={input}/>
            <br/>
            <input type='number' placeholder='Phone Number' style={input}/>
            <br/>
            <input type='checkbox'/>
            <p>I agree to the Terms & Conditions and Privacy Policy</p>
            </div>
            
        </div>
        <Button variant="contained" style={{width:"98%", margin:"1%"}}>Conatct Builder</Button>
    </div>
  )
}
const main={
    backgroundColor: "rgba(255,255,255,0.1)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding a box shadow
    width: "60%",
    margin: "auto",
    padding: "10px", // Added padding for better spacing
    borderRadius: "8px"
};
const head={
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    gap:20
};
const input={
    textAlign:"center",
    width:"80%",
    margin: "auto",
    border:'1px solid grey',
    borderRadius:5
};

export default BuiderDetails