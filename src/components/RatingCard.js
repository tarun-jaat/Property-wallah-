import React from 'react'

const rating = [
    {
        "rate": 3.9,
        "star":4,
        "type": "Average Rating",
        "total":5,
        
    }
]
function RatingCard() {
  return (
    <div>
        <div>
            <h6>{rating.rate}/5</h6>
        </div>
    </div>
  )
}

export default RatingCard