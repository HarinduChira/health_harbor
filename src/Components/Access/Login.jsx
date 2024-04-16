import React from 'react'
import emailimg from './AccessStyle/email.png'
import passwordimg from './AccessStyle/password.png'

import axios from 'axios'
import './AccessStyle/Login.css'
import { useState } from 'react'
import Header from '../Navigation/Header'
import { NavLink } from 'react-router-dom'
import Home from '../Pages/Home/Home'

const Login = () => {

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

            alert(res.data);

            <Home userEmail={user.email}/>

        }
        catch (error) {
            console.error("Error sending data:", error);
        }
    }
  
  
    return ( 
    
    <div className='login'>
        <Header />
        <div className='fill'></div>
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>

            <form action='' onSubmit={handleLogin}>
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

        <div className="message">
                <p>New User? <NavLink to="/Signup"><span>SignUp</span></NavLink></p>
        </div>

        <div className='fill'></div>
    </div>
  )
}

export default Login
