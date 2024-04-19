import React from 'react'
import './ManagerEmpList.css'   
import axios from 'axios'
import { useEffect, useState } from 'react'

const ManagerEmpList = () => {

    const[employee, setEmployee] = useState([]);

    useEffect(() => {
            
            axios.get('http://localhost:8080/api/Employees')
            .then(res => {
                console.log(res);
                setEmployee(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }, []);


  return (
    <div class="empList">
        <table>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Contact No</th>
                </tr>
            </thead>
            <tbody>
                {employee
                    .map((employee) => (
                    
                    <tr>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.contactNo}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    </div>

  )
}

export default ManagerEmpList
