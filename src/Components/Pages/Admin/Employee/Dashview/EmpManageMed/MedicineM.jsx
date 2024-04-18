import React from 'react'
import Medtable from './Medtable';
import './MedicineM.css';


const MedicineM = () => {
  return (
    <div className='content'>
      <h2>Manage Medicine</h2>
      <button className='add-button'>Add Medicine</button>
      <button className='add-button'>Refresh</button>
      <div className='maintable'>
     <Medtable/>
    </div>
    </div>
  )
}

export default MedicineM
