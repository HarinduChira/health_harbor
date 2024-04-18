import React from 'react'
import './EmpSidebar.css';
import { EmpsidebarData } from './EmpsidebarData';

export default function Sidebar() {
  return (
  <div className='Sidebar'>
    <h1 >Health Harbor</h1>
    <ul className='Sidebarlist'>
      {EmpsidebarData.map((val,key) => {
      return (
        <li key={key} className='row' id={window.pathname = val.link ? "active" : ""} onClick={()=> {window.location.pathname = val.link }}>
        {" "}
        <div id='icon'> {val.icon} </div> {" "}
        <div id='title'>
          {val.titile}
        </div>
        </li>
      );
 })}
    </ul>
    </div>);
}
