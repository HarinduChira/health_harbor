import React from 'react'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';


export const CusSideBarData = [
    {
        titile: 'Manage Account',
        icon: <MedicalServicesIcon/>,
        link: "/Customer/Account/ManageAccount"
    },
    {
        titile: 'Order History',
        icon: <HowToRegIcon/>,
        link: "/Customer/Account/OrderHistory"
    },
    {
        titile: 'Log Out',
        icon: <LogoutIcon/>,
        link: "/Customer"
    },
]
  
