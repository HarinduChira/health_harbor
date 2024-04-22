import React from 'react'
import ManagerDashCard from '../ManagerDashCard/ManagerDashCard'
import './ManagerDashBoard.css'

const ManagerDashBoard = () => {
  return (
    <div className='mg-dashboard'>
        <div className='mg-dashboard-left'>
            <h1>Health Harbor</h1>
        </div>

        <div className='mg-dashboard-right'>
            <div className="mg-dashboard-right-top">
                <div className='mg-dashboard-card'>
                    <ManagerDashCard name={"Approve Updates"}/>
                </div>
                <div className='mg-dashboard-card'>
                    <ManagerDashCard name={"DashBoard"}/>
                </div>
            </div>

            <div className="mg-dashboard-right-bottom">
                <div className='mg-dashboard-card'>
                    <ManagerDashCard name={"Manage Employees"}/>
                </div>
                <div className='mg-dashboard-card'>
                    <ManagerDashCard name={"Log Out"}/>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default ManagerDashBoard
