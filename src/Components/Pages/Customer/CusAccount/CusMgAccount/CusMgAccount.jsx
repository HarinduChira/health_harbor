import React, { useEffect } from 'react'
import './CusMgAccount.css'
import { useState } from 'react'
import axios from 'axios'

import Swal from 'sweetalert2'

const CusMgAccount = () => {

    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        contactNo: '',
        addressNo: '',
        addressStreet: '',
        addressCity: ''
    });

    const localEmail = localStorage.getItem('email');

    const putUrl = `http://localhost:8080/api/Customer/UpdateCusDetails/${localEmail},${customer.name},${customer.email},${customer.contactNo},${customer.addressNo},${customer.addressStreet},${customer.addressCity}`;

    const updateDetails = () => {

        alert(putUrl);

        axios.put(putUrl)
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Details Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(err => {
            console.log(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Details Not Updated",
                showConfirmButton: false,
                timer: 1500
              });
        });
    }

    const UpdatePassword = () => {
        const putUrl = `http://localhost:8080/api/Customer/UpdatePassword/${localEmail},${document.getElementById('newPassword').value}`;
        
        axios.put(putUrl)
        .then(res => {
            console.log(res);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Password Updated",
                showConfirmButton: false,
                timer: 1500
              });

        })
        .catch(err => {
            console.log(err);
        });
    }


    const changePassword = () => {

        if(document.getElementById('oldPassword').value === '' || 
        document.getElementById('oldPassword').value === '' ||
        document.getElementById('newPassword').value === '' )
        {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill all the fields",
                showConfirmButton: false,
                timer: 1500
              });
              return;
        }else if (document.getElementById('oldPassword').value === document.getElementById('newPassword').value){
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Old and New Passwords are same",
                showConfirmButton: false,
                timer: 1500
              });
              return;
        }else if (document.getElementById('newPassword').value !== document.getElementById('confirmPassword').value){
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Passwords do not match",
                showConfirmButton: false,
                timer: 1500
              });
              return;
        }else{
            const getUrl = `http://localhost:8080/api/Customer/Check/${localEmail},${document.getElementById('oldPassword').value}`;
            axios.get(getUrl)
            .then(res => {
                console.log(res.data);

                if (res.data === "Login Success") {
                    UpdatePassword();
                }
                else{
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Old Password is Incorrect",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Password Not Updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            });
        }


    }

    useEffect(() => {
        fetchCustomerData();
        //eslint-disable-next-line
    }, []);
    
    
      const fetchCustomerData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/Customer/GetByEmail/${localEmail}`);
        
            setCustomer(response.data);

        } catch (error) {
          console.error('Error fetching customer data:', error);
        }
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


  return (
    <div className='cus-mg-account'>
        <div className="cus-mg-account-details">
            <h1 className='cus-mg-h1'>Account Details</h1>
            
            <div className="cus-mg-account-details-form">
                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">Name</label>
                    <input className="cus-mg-account-details-form-inputs" type="text" 
                    placeholder="Name" name='name'
                    value={customer.name} onChange={handleChange}/>                  
                </div>
                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">Email</label>
                    <input className="cus-mg-account-details-form-inputs" type="email" 
                    placeholder="Email" name='email'
                    value={customer.email} onChange={handleChange}/>
                </div>

                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">Phone Number</label>
                    <input className="cus-mg-account-details-form-inputs" type="text" 
                    placeholder="Phone Number" name='contactNo'
                    value={customer.contactNo}  onChange={handleChange} />
                </div>

                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">Address No</label>
                    <input className="cus-mg-account-details-form-inputs" type="text" 
                    placeholder="Address" name='addressNo'
                    value={customer.addressNo} onChange={handleChange}/>
                </div>

                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">Address Street</label>
                    <input className="cus-mg-account-details-form-inputs" type="text" 
                    placeholder="Address" name='addressStreet'
                    value={customer.addressStreet} onChange={handleChange}/>
                </div>

                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">Address City</label>
                    <input className="cus-mg-account-details-form-inputs" type="text" 
                    placeholder="Address" name='addressCity'
                    value={customer.addressCity} onChange={handleChange}/>
                </div>
                <button className='cus-mg-acnt-btn' onClick={updateDetails}>Update Details</button>
            </div>  
      
        </div>
        <div className="cus-mg-account-password">
            <h1 className='cus-mg-h1'>Change Password</h1>
            <div className="cus-mg-account-password-form">
                
                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">Old Password</label>
                    <input className="cus-mg-account-details-form-inputs" name='oldPassword' id='oldPassword'
                    type="password" placeholder="Old Password"/>
                </div>

                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">New Password</label>
                    <input className="cus-mg-account-details-form-inputs" name='newPassword' id='newPassword'
                    type="password" placeholder="New Password"/> 
                </div>

                <div className="cus-mg-account-details-form-input">
                    <label className="cus-mg-account-details-form-label">Confirm Password</label>
                    <input className="cus-mg-account-details-form-inputs"   name='confirmPassword' id='confirmPassword'
                    type="password" placeholder="Confirm Password"/>
                </div>
                <button className='cus-mg-acnt-btn' onClick={changePassword} >Change Password</button>
            </div>
        </div>
        
    </div>
  )
}

export default CusMgAccount
