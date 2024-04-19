import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import emailimg from './email.png';
import passwordimg from './password.png';
import landing from './Landing.mp4';

const EmpLanding = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
    const handleChange = (e) => {
            
            setUser({
                ...user,
                [e.target.id]: e.target.value,
            });
        }
    
        const handleLogin = async (e) =>{
    
            e.preventDefault();
        
            if (user.email === "" || user.password === "") {
                alert("All fields are mandatory");
                return;
            }
        
            try{
                const res = await axios.get('http://localhost:8080/api/CusLogin/' + user.email + ',' + user.password);  
                console.log(res.data);
        
                setUser({
                    email: "",
                    password: "",
                });
        
                window.location.href = "/Admin/Employee/EmpDashboard";
        
            }
            catch (error) {
                console.error("Error sending data:", error);
            }
          }
          
    return (
    <div className='supLanding-Main'>
        <div className='supLanding-Main-Left'>
            <p>Welcome To Health Harbor</p>
            <p>Employee Portal</p>
            <video autoPlay loop muted  className='background-sup'>
                <source src={landing} type="video/mp4"/>
            </video>
        </div>
        <div className='supLanding-Main-right'>
        <div className='Mg-container'>
              <div className="header">
                  <div className="text">Login</div>
                  <div className="underline"></div>
              </div>
    
              <form action='' onSubmit={handleLogin} >
                  <div className="inputs">
                      <div className="input">
                          <img src={emailimg} alt=""/>
                          <input type="email" placeholder='Email Id' id='email'
                          value={user.email}
                          onChange={handleChange} />
                      </div>
    
                      <div className="input">
                          <img src={passwordimg} alt=""/>
                          <input type="password" placeholder='Password' id='password'
                          value={user.password}
                          onChange={handleChange} />
                      </div>
                  </div>
    
                  <div className="forget-password">Lost Password? <span>Click Here</span></div>
                  
                  <div className="submit-container">
                      <input className='submit' type="submit" value="Login" />
                  </div>  
              </form> 
          </div>
            
        </div>
    </div>
    )
}

export default EmpLanding
