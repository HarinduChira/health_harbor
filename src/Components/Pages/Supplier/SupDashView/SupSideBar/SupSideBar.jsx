import React from 'react'
import './SupSideBar.css';
import { SupSideBarData } from './SupSideBarData';

const SupSideBar = () => {
  return (
    <div>
        <h1 >Health Harbor</h1>
    
        <ul className='Sidebarlist'>
            {SupSideBarData.map((val,key) => {
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

export default SupSideBar
