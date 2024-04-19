import React from 'react'
import SupDashCard from '../SupDashCard/SupDashCard'


const SupDashBoard = () => {
  return (
    <div className='mg-dashboard'>
        <div className='mg-dashboard-left'>
            <h1>Health Harbor</h1>
            <div className='mg-dashboard-card'>
            </div>
        </div>

        <div className='mg-dashboard-right'>
            <div className='mg-dashboard-card'>
                <SupDashCard name={"Manage Stock"}/>
            </div>
            <div className='mg-dashboard-card'>
                <SupDashCard name={"Approve Request"}/>
            </div>
            <div className='mg-dashboard-card'>
                <SupDashCard name={"Log Out"}/>
            </div>
        </div> 
    </div>
  )
}

export default SupDashBoard
