import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';

export const EmpsidebarData =[
    {
        title: 'Manage Medicine',
        icon: <ManageSearchIcon/>,
        link: "/EmpMangeMed"
    },
    {
        title: 'Request Medicine',
        icon: <MedicalServicesIcon/>,
        link: "/"
    },
    {
        title: 'Approve Request',
        icon: <HowToRegIcon/>,
        link: "/"
    },
    {
        title: 'Log Out',
        icon: <LogoutIcon/>,
        link: "/"
    },
]

 
