import React from 'react'


const SupDashViewData = ({selectMenu}) => 
{
    return (
        <div className='manageDash-main'>
        {   selectMenu === "Manage Stock" &&
            <div className="managerDashView-Right-Top" >
                <h2>{selectMenu}</h2>
            </div>
        }
        {   selectMenu === "Manage Stock" &&
            <div className="managerDashView-Right-Bottom">
                <h3>{selectMenu} </h3>
            </div>
        }
        {   selectMenu === "Approve Request"
            &&
            <div className='managerDashBoard-Right-Full'>
                <h2>{selectMenu}</h2>
            </div>
        }  
    </div>
    )
}

export default SupDashViewData
