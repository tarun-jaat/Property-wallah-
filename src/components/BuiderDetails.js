import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Button } from '@mui/material';

function BuiderDetails() {
  return (
    <div style={main}>
        <div style={head}>
            <AccountBoxIcon />
            <div>
                <h6>Bilder Name</h6>
                <p>VAJRA TOWER SALES TEAM</p>
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
                <input type='text' placeholder='Name'/>
                <br/>
            <input type='email' placeholder='Email'/>
            <br/>
            <input type='number' placeholder='Phone Number'/>
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
    backgroundColor:"rgba(255,255,255,0.1)",
    border:"2px solid blue",
    width:"50%",
    margin:"auto"
};
const head={
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    gap:20
};
const input={
    textAlign:"center"
};

export default BuiderDetails