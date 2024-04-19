import React from 'react'

const EmpDashCard = ({name}) => {
  return (
    <div className='mg-dash-card'>
        <div className="mg-dash-card-top">
            <h2>{name}</h2>
        </div>
        <div className="mg-dash-card-bottom">
            <button 
              onClick={ () => {
                if(name === 'Manage Medicine'){
                  window.location.href = '/Admin/Employee/EmpDashboard/EmpDashView/ManageMedicine'
                } else if(name === 'Request Medicine'){
                  window.location.href = '/Admin/Employee/EmpDashboard/EmpDashView/RequestMedicine'
                } else if(name === 'Approve Orders'){
                  window.location.href = '/Admin/Employee/EmpDashboard/EmpDashView/ApproveCusOrder'
                } else if(name === 'Log Out'){
                  window.location.href = '/Admin/Employee'
                }
              }}
            >View</button>
        </div>
        
    </div>
  )
}

export default EmpDashCard
