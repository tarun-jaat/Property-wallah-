import React from 'react';
import ResidentReviewCard from './ResidentReviewCard';

const reviews = [
    {
      rate: 4.0,
      positive: "Well-maintained and clean",
      negative: "Parking space is limited",
      person: "Resident",
      time: "Posted 6m ago",
    },
    {
      rate: 4.0,
      positive: "Well-maintained and clean",
      negative: "Parking space is limited",
      person: "Resident",
      time: "Posted 6m ago",
    },
]
function AllReviewResidents() {
  return (
    <div>
      <h1>All Reviews</h1>
      <ResidentReviewCard reviews={reviews} />
    </div>
  );
}

export default AllReviewResidents;
