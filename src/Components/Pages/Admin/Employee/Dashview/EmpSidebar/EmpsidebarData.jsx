import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';

export const EmpsidebarData =[
    {
        titile: 'Manage Medicine',
        icon: <ManageSearchIcon/>,
        link: "/EmpMangeMed"
    },
    {
        titile: 'Request Medicine',
        icon: <MedicalServicesIcon/>,
        link: "/"
    },
    {
        titile: 'Approve Request',
        icon: <HowToRegIcon/>,
        link: "/"
    },
    {
        titile: 'Log Out',
        icon: <LogoutIcon/>,
        link: "/"
    },
]

 
