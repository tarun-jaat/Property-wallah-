// import React from 'react'
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import StarIcon from '@mui/icons-material/Star';
// import { display, height, textAlign, width } from '@mui/system';

// const rating = {
    
//         "rate": 3.9,
//         "star":4,
//         "type": "Average Rating",
//         "total":5,
//         "one":0,
//         "two":0,
//         "three":5,
//         "four":8,
//         "five":5
// }  
// function RatingCard() {
//   return (
//     <div style={main}>
//         <div style={part}>
//             <p style={para1}>{rating.rate}/5</p>
//             <div>
//               <StarBorderIcon/>
//               <StarBorderIcon/>
//               <StarBorderIcon/>
//               <StarBorderIcon/>
//               <StarBorderIcon/>
//             </div>
//             <p style={para}>{rating.type}</p>
//             <p style={para}>({rating.total} Total Reviews)</p>
//         </div>
//         <div>
//           <div style={ratingBar}>
//             <div style={bar}></div>
//             <p>5</p>
//             <StarIcon/>
//           </div>
//           <div style={ratingBar}>
//             <div style={bar}></div>
//             <p>5</p>
//             <StarIcon/>
//           </div>
//           <div style={ratingBar}>
//             <div style={bar}></div>
//             <p>5</p>
//             <StarIcon/>
//           </div>
//           <div style={ratingBar}>
//             <div style={bar}></div>
//             <p >5</p>
//             <StarIcon/>
//           </div>
//           <div style={ratingBar}>
//             <div style={bar}></div>
//             <p>5</p>
//             <StarIcon/>
//           </div>
//         </div>
//         <p style={para}>See how ratings are calculated</p>
//     </div>
//   )
// }

// const bar={
//   width:"60%",
//   height:10,
//   backgroundColor:"grey"
// }
// const ratingBar = {
//   display:"flex",
//   alignItems: "center",
//   justifyContent: "center",
  
//   gap:10,
// }
// const part = {
//   textAlign: "center",
// }
// const main={
//   width:"40%",
//   borderRadius:10,
//   textAlign: "center",
//   padding:10
// }
// const para={
//   fontSize:13,
//   margin:0,
//   fontWeight:"500"
// }
// const para1={
//   fontSize:15,
//   fontWeight:"700"
// }
// export default RatingCard


import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { display, height, textAlign, width } from '@mui/system';

const rating = {
    "rate": 4,
    "type": "Average Rating",
    "total": 5,
    "one": 0,
    "two": 0,
    "three": 5,
    "four": 8,
    "five": 5
};

function RatingCard() {
    const filledStars = Math.floor(rating.rate); // Get the number of filled stars
    const halfStar = rating.rate % 1 !== 0; // Check if there is a fractional part in the rating
    const totalReviews = Object.values(rating).reduce((acc, curr) => typeof curr === 'number' ? acc + curr : acc, 0);

    return (
        <div style={main}>
            <div style={part}>
                <p style={para1}>{rating.rate}/5</p>
                <div>
                    {Array.from({ length: 5 }, (_, i) => (
                        i < filledStars ? (
                            <StarIcon key={i} style={starStyle} />
                        ) : (
                            <StarBorderIcon 
                                key={i} 
                                style={{ 
                                    ...starStyle, 
                                    color: i === filledStars && halfStar ? "gold" : undefined 
                                }} 
                            />
                        )
                    ))}
                </div>
                <p style={para}>{rating.type}</p>
                <p style={para}>({rating.total} Total Reviews)</p>
            </div>
            <div>
                {[5, 4, 3, 2, 1].map(star => {
                    const starCount = rating[`${star}`];
                    const percentage = (starCount / totalReviews) * 100; // Calculate percentage

                    return (
                        <div key={star} style={ratingBar}>
                            <div style={{
                                ...bar,
                                background: `linear-gradient(to right, blue ${percentage}%, grey ${percentage}%)`
                            }}></div>
                            <p>{star}</p>
                            <StarIcon style={starStyle} />
                        </div>
                    );
                })}
            </div>
            <p style={para}>See how ratings are calculated</p>
        </div>
    );
}

const bar = {
    width: "60%",
    height: 10,
    backgroundColor: "grey",
    borderRadius: 5,
};

const ratingBar = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
};

const part = {
    textAlign: "center",
};

const main = {
    width: "40%",
    borderRadius: 10,
    textAlign: "center",
    padding: 10,
    boxSizing: 'border-box'
};

const para = {
    fontSize: 13,
    margin: 0,
    fontWeight: "500"
};

const para1 = {
    fontSize: 15,
    fontWeight: "700"
};

const starStyle = {
    color: "gold",
    fontSize: 20
};

export default RatingCard;
