import React from 'react'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';

export const SupSideBarData = [
  {
      titile: 'Manage Stock',
      icon: <MedicalServicesIcon/>,
      link: "/Supplier/SupplierDashBoard/SupplierDashView/ManageStock"
  },
  {
      titile: 'Approve Requests',
      icon: <HowToRegIcon/>,
      link: "/Supplier/SupplierDashBoard/SupplierDashView/ApproveRequest"
  },
  {
      titile: 'Log Out',
      icon: <LogoutIcon/>,
      link: "/Supplier"
  },
]

