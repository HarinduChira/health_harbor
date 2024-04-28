import React from 'react'
import Header from '../../../Navigation/Header'
import './CusAccount.css'
import CusACSideBar from './CusACSideBar/CusACSideBar'
import OrderHistory from '../OrderHistory/OrderHistory'
import CusMgAccount from './CusMgAccount/CusMgAccount'

const CusAccount = ({selectMenu}) => {
  return (
    <div className='cus-account'>
        <div className="header-cus-account">
            <Header logStatus={true}/>
        </div>
        <div className="cus-account-body">

            <div className="body-inner">
                <div className="cus-account-SideBar">
                    <CusACSideBar/>
                </div>
                <div className="cus-account-View">
                    <div className="cus-account-View-Data">
                        {selectMenu=== "OrderHistory"  && 
                           <div className="orderHistory">
                                <OrderHistory/>
                           </div>
                        }
                        {selectMenu === "ManageAccount" && 
                            <div className="account">
                                <CusMgAccount/> 
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CusAccount
