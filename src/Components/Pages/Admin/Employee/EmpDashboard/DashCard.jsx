import React from 'react'
import './DashCard.css';

const DashCard = ({name}) => {
  return (
    <div className='card'>
    <h2>{name}</h2>
    <button>View</button>
  </div>
  )
}

export default DashCard


