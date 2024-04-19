import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';

export const ManagerSideBarData =[
    {
        titile: 'DashBoard',
        icon: <ManageSearchIcon/>,
        link: "/Admin/Manager/ManagerDashBoard/ManagerDashView/ManagerDash"
    },
    {
        titile: 'Manage Employees',
        icon: <MedicalServicesIcon/>,
        link: "/Admin/Manager/ManagerDashBoard/ManagerDashView/ManageEmployee"
    },
    {
        titile: 'Approve Updates',
        icon: <HowToRegIcon/>,
        link: "/Admin/Manager/ManagerDashBoard/ManagerDashView/ApproveUpdates"
    },
    {
        titile: 'Log Out',
        icon: <LogoutIcon/>,
        link: "/Admin/Manager"
    },
]
