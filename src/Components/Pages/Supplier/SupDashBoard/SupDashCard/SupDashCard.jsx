import React from 'react'

const SupDashCard = ({name}) => {
  return (
    <div>
        <div className='mg-dash-card'>
        <div className="mg-dash-card-top">
            <h2>{name}</h2>
        </div>
        <div className="mg-dash-card-bottom">
            <button 
              onClick={ () => {
                if(name === 'Manage Stock'){
                  window.location.href = '/Supplier/SupplierDashBoard/SupplierDashView/ManageStock'
                } else if(name === 'Approve Request'){
                  window.location.href = '/Supplier/SupplierDashBoard/SupplierDashView/ApproveRequests'
                } else if(name === 'Log Out'){
                  window.location.href = '/Supplier'
                }
              }}
            >View</button>
        </div>
        
    </div>
      
    </div>
  )
}

export default SupDashCard
