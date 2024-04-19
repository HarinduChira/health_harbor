import React from 'react'
import './ManagerDashCard.css'

const ManagerDashCard = ({name}) => {
  return (
    <div className='mg-dash-card'>
        <div className="mg-dash-card-top">
            <h2>{name}</h2>
        </div>
        <div className="mg-dash-card-bottom">
            <button 
              onClick={ () => {
                if(name === 'DashBoard'){
                  window.location.href = '/Admin/Manager/ManagerDashBoard/ManagerDashView/ManagerDash'
                } else if(name === 'Manage Employees'){
                  window.location.href = '/Admin/Manager/ManagerDashBoard/ManagerDashView/ManageEmployee'
                } else if(name === 'Approve Updates'){
                  window.location.href = '/Admin/Manager/ManagerDashBoard/ManagerDashView/ApproveUpdates'
                } else if(name === 'Log Out'){
                  window.location.href = '/Admin/Manager'
                }
              }}
            >View</button>
        </div>
        
    </div>
  )
}

export default ManagerDashCard
