import React from 'react'
import ManagerSideBar from './ManagerSideBar/Manager_SideBar'
import './ManagerDashView.css'
import ManagerDashViewData from './ManagerDashViewData/ManagerDashViewData'

const ManagerDashView = ({selectMenu}) => {
  return (
    <div className='managerDashView'>
        <div className="managerDashView-SideBar">
          <ManagerSideBar selectMenu={selectMenu}/>
        </div>
        <div className="managerDashView-Right">
          <ManagerDashViewData selectMenu={selectMenu}/>
        </div>
    </div>
  )
}

export default ManagerDashView
