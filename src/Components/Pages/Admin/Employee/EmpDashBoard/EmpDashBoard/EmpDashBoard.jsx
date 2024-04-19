import React from 'react'
import EmpDashCard from '../EmpDashCard/EmpDashCard'

const EmpDashBoard = () => {
  return (
    <div className='mg-dashboard'>
        <div className='mg-dashboard-left'>
            <h1>Health Harbor</h1>
            <div className='mg-dashboard-card'>
                <EmpDashCard name={"Manage Medicine"}/>
            </div>

        </div>

        <div className='mg-dashboard-right'>
            <div className='mg-dashboard-card'>
                <EmpDashCard name={"Request Medicine"}/>
            </div>
            <div className='mg-dashboard-card'>
                <EmpDashCard name={"Approve Orders"}/>
            </div>
            <div className='mg-dashboard-card'>
                <EmpDashCard name={"Log Out"}/>
            </div>
        </div> 
    </div>
  )
}

export default EmpDashBoard
