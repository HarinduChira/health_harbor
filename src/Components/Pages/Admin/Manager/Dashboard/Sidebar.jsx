import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Health Harbor
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="#dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#medicines">
                    <BsFillArchiveFill className='icon'/> Medicines
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#categories">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#customers">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#inventory">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#reports">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#setting">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar