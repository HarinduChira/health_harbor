import React from 'react'
import DashCard from './DashCard'
import './EmpDashBoard.css';


const EmpDashBoard = () => {
  return (
    <div className='dash'>

             <div className='left'>
                <h1>Health Harbor</h1>
                <div className='card'><DashCard name="Manage-Medicine"/></div>
              </div>

              <div className='right'>
                <div className='card'><DashCard name="Request-Medicine"/></div>
                <div className='card'><DashCard name="Approve-Requests"/></div>
              </div>
    </div>
  )
}

export default EmpDashBoard













