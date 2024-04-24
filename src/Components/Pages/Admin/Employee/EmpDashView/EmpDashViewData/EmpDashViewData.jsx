import React from 'react'
import EmpManageMedicine from '../../EmpManageMedicine/EmpManageMedicine'
import EmpReqMedicine from '../../EmpReqMedicine/EmpReqMedicine'
import EmpRequestMedicine from '../../EmpReqMedicine/EmpRequestMedicine'
import EmpAddMed from '../../EmpAddMed/EmpAddMed'

const EmpDashViewData = ({selectMenu}) => {
  return (
    <div className='manageDash-main'>
        {   (selectMenu === "ManageMedicine" || selectMenu === "RequestMedicine") &&
            <div className="managerDashView-Right-Top" >
                {selectMenu === "ManageMedicine"  && <EmpAddMed/>}
                {selectMenu === "RequestMedicine"  && <EmpRequestMedicine/>}    
            </div>
        }
        {   (selectMenu === "ManageMedicine" || selectMenu === "RequestMedicine") &&
            <div className="managerDashView-Right-Bottom">
                {selectMenu === "ManageMedicine"  && <EmpManageMedicine/>}
                {selectMenu === "RequestMedicine"  && <EmpReqMedicine/>}    
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
