import React from 'react'
import './ManagerSideBar.css';
import { ManagerSideBarData } from './ManagerSideBarData';

const ManagerSideBar = () => {
  return (
    <div>
        <h1 >Health Harbor</h1>
    
        <ul className='Sidebarlist'>
            {ManagerSideBarData.map((val,key) => {
            return (
                <li key={key} className='row' 
                    id={window.pathname = val.link ? "active" : ""} 
                    onClick={()=> {window.location.pathname = val.link }}
                >

                {" "}

                <div id='icon'> 
                    {val.icon} 
                </div> {" "}
                
                <div id='title'>
                    {val.titile}
                </div>
                </li>
                );
            })}
        </ul>      
    </div>
  )
}

export default ManagerSideBar;

