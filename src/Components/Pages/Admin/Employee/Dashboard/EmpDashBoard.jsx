import React from 'react'
import DashCard from './DashCard'
import './EmpDashBoard.css';


const EmpDashBoard = () => {
  return (
    <div className='dash'>
                <div>Health Harbor</div>
                <div><DashCard name="Manage Medicine"/></div>
                <div><DashCard name="Request Medicine"/></div>
                <div><DashCard name="Approve Requests"/></div>
    </div>
  )
}

export default EmpDashBoard
