import React from 'react'
import './DashCard.css';

const DashCard = ({name}) => {
  return (
    <div className='card'>
    <h1>{name}</h1>
    <button>View</button>
  </div>
  )
}

export default DashCard
