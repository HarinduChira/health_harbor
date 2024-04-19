import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';

export const EmpSideBarData = [
    {
        titile: 'Manage Medicine',
        icon: <ManageSearchIcon/>,
        link: "/Admin/Employee/EmpDashboard/EmpDashView/ManageMedicine"
    },
    {
        titile: 'Request Medicine',
        icon: <MedicalServicesIcon/>,
        link: "/Admin/Employee/EmpDashboard/EmpDashView/RequestMedicine"
    },
    {
        titile: 'Approve Orders',
        icon: <HowToRegIcon/>,
        link: "/Admin/Employee/EmpDashboard/EmpDashView/ApproveCusOrder"
    },
    {
        titile: 'Log Out',
        icon: <LogoutIcon/>,
        link: "/Admin/Employee"
    },
]
