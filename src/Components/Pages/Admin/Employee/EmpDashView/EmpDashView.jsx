import React from 'react'
import EmpSideBar from './EmpSideBar/EmpSideBar'
import EmpDashViewData from './EmpDashViewData/EmpDashViewData'

const EmpDashView = ({selectMenu}) => {
  return (
    <div className='managerDashView'>
        <div className="managerDashView-SideBar">
          <EmpSideBar/>
        </div>
        <div className="managerDashView-Right">
          <EmpDashViewData selectMenu={selectMenu}/>
        </div>
    </div>
  )
}

export default EmpDashView
