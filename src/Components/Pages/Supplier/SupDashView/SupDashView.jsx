import React from 'react'
import SupSideBar from './SupSideBar/SupSideBar'
import SupDashViewData from './SupDashViewData/SupDashViewData'
import './SupDashView.css'

const SupDashView = ({selectMenu}) => {
  return (
    <div className='managerDashView'>
        <div className="managerDashView-SideBar">
          <SupSideBar/>
        </div>
        <div className="managerDashView-Right">
          <SupDashViewData selectMenu={selectMenu}/>
        </div>
    </div>
  )
}

export default SupDashView
