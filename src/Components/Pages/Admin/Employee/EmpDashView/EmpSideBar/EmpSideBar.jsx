import React from 'react'
import { EmpSideBarData } from './EmpSideBarData';

const EmpSideBar = () => {
  return (
    <div>
                <h1 className='sideBar-h1'>Health Harbor <br /> Employee</h1>
    
    <ul className='Sidebarlist'>
        {EmpSideBarData.map((val,key) => {
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

export default EmpSideBar
