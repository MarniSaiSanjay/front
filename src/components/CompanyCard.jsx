import React from 'react';
import "../style/CompanyCard.css";

function CompanyCard(props) {
  return (
    <div className='cards'>
        <h2>{props.name}</h2>
    </div>
  )
}

export default CompanyCard;