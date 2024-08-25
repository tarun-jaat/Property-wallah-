import { Button } from '@mui/material'
import React from 'react'

const cardData = [
    {
        "image": "https://newprojects.99acres.com/projects/lucky_real_estate_developers/lucky_balaji_parisar/images/c5jkmzv5_med.jpg",
        "name": "Lucky Balaji Parisar Phase 2",
        "desc":"3,4 BHK House in Ayoodhya Bypass, Bhopal",
        "threebhk":"1.11 - 1.35 Cr",
        "fourbhk":"1.6 Cr",
        "about":"Lucky Balaji Parisar Phase 2 brings 3,4 BHK Villa in Ayodhya",
        "builder":"Lucky Real Estate Developers"
    }
]
function PlacesCard() {
  return (
    <div>
        <div>
            <img src={cardData.image}/>
            <div>
                <h5>{cardData.name}</h5>
                <p>{cardData.desc}</p>
                <div>
                    <div>
                        <p>3 BHK Villa</p>
                        <h6>{cardData.threebhk}</h6>
                    </div>
                    <div>
                        <p>4 BHK Villa</p>
                        <h6>{cardData.fourbhk}</h6>
                    </div>
                </div>
                <p>{cardData.about}</p>
            </div>
            <div>
                <div>
                    <p>Builder</p>
                    <h6>{cardData.builder}</h6>
                </div>
                <Button>Brouch</Button>
            </div>
        </div>
    </div>
  )
}

export default PlacesCard