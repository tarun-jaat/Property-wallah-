import React from 'react'
import { useParams } from 'react-router-dom'


function PropertyDetail() {
  const{id}=useParams();
  return (
    <div>
      <h2>Property Detail for  ID:{id}</h2>
    </div>
  )
}

export default PropertyDetail
