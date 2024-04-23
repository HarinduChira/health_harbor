import React from 'react'
import { useState } from 'react'
import './ManagerMgEmp.css'

const ManagerMgEmp = () => {

    const [employee, setEmployee] = useState(
        {
            name: '',
            email: ''
        }
    );



  return (
    <div className='mgEmp-full'>
        <div className="mgEmp-Head">
            <h2>Manage Employeessss</h2>
        </div>

        <div className="mgEmp-form">
        <form >
                <div className='mgEmp-form-section'>
                    <label className='mgEmp-form-section-label'>Employee Name</label>
                    <input 
                        type="text" 
                        value={employee.name} 
                        onChange={(e) => setEmployee(e.target.value)} 
                        required 
                    />
                </div>
                <div className='mgEmp-form-section'>
                    <label className='mgEmp-form-section-label'>Employee Email</label>
                    <input 
                        type="email" 
                        value={employee.email} 
                        onChange={(e) => setEmployee(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mgEmp-button">
                    <button type="submit">Register</button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default ManagerMgEmp

