import React from 'react'
import './ManagerDashViewData.css'
import ManagerEmpList from '../../ManagerEmpList/ManagerEmpList'
import ManagerMgEmp from '../../ManagerMgEmp/ManagerMgEmp'

const ManagerDashViewData = ({selectMenu}) => {
  return (
    <div className='manageDash-main'>
        {   selectMenu === "ManageEmployee" &&
            <div className="managerDashView-Right-Top" >
                <h2><ManagerMgEmp /> </h2>
            </div>
        }
        {   selectMenu === "ManageEmployee" &&
            <div className="managerDashView-Right-Bottom">
                <h3><ManagerEmpList /></h3>
            </div>
        }
        {   (selectMenu === "ApproveUpdates" || selectMenu === "ManagerDash")
            &&
            <div className='managerDashBoard-Right-Full'>
                <h2>{selectMenu}</h2>
            </div>
        }  
    </div>
  )
}

export default ManagerDashViewData
