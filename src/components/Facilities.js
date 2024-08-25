import React from 'react'
import FacilityCards from './FacilityCard'
import { Button } from '@mui/material'

function Facilities() {
  return (
    <div>
        <h3>Top Facilities</h3>
        <p>Sheth Zuri Thane presents an exclusive opportunity to own a stunning home that offers all kinds of amenities and facilities. This includes an infinity pool, swimming pool, and easy access to reading lounge.  </p>
        <FacilityCards/>
        <Button style={{color:"black", fontSize:12, fontWeight:"bold",textTransform: "capitalize" , marginTop:20}}>View Facility Photos</Button>
    </div>
  )
}

export default Facilities