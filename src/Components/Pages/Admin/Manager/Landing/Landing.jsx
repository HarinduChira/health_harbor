import React from 'react';
import './Landing.css'; 
import Video from './Video';
import emailimg from './email.png';
import passwordimg from './password.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const Landing = () => {

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

        window.location.href = "/Admin/Manager/ManagerDashBoard";

    }
    catch (error) {
        console.error("Error sending data:", error);
    }
  }




  return (
    <div className="page">
      <div className="left-section">     
        <Video />
      </div>

      <div className="right-section">
        <div className="top-section">
          <p>Welcome to</p>
          <p>Health Harbor</p>
          <p>Management System</p>
        </div>
        <div className='Mg-login'>
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

          <div className="mg-message">
                  <p>New User? <NavLink to="/Admin/Manager/Signup"><span>SignUp</span></NavLink></p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Landing;
