import React from 'react'
import EmpManageMedicine from '../../EmpManageMedicine/EmpManageMedicine'

const EmpDashViewData = ({selectMenu}) => {
  return (
    <div className='manageDash-main'>
        {   (selectMenu === "ManageMedicine" || selectMenu === "RequestMedicine") &&
            <div className="managerDashView-Right-Top" >
                <h2>{selectMenu}</h2>
            </div>
        }
        {   (selectMenu === "ManageMedicine" || selectMenu === "RequestMedicine") &&
            <div className="managerDashView-Right-Bottom">
                <h3><EmpManageMedicine/></h3>
            </div>
        }
        {   (selectMenu === "ApproveCusOrder" )
            &&
            <div className='managerDashBoard-Right-Full'>
                <h2>{selectMenu}</h2>
            </div>
        }  
    </div>
  )
}

export default EmpDashViewData
