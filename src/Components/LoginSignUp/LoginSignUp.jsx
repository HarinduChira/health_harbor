import React,{useState} from 'react'
import './LoginSignUp.css'
import axios from 'axios'

import emailimg from './email.png'
import passwordimg from './password.png'


function LoginSignUp()  {
 
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');


  const checkLogin = async () =>{

      const res = await axios.get('http://localhost:8080/api/CusLogin/' + email + ',' + password);  
      console.log(res.data);
  }


  return (
    
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>

      <form action='' onSubmit={checkLogin()}>
      
      <div className="inputs">

        <div className="input">
            <img src={emailimg} alt=""/>
            <input type="email" placeholder='Email Id' id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="input">
          <img src={passwordimg} alt=""/>
          <input type="password" placeholder='Password' id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>

      </div>

      <div className="forget-password">Lost Password? <span>Click Here</span></div>
      <div className="submit-container">
        <input className='submit' type="submit" value="Login" />
      </div>  
      </form>  
      
    </div>
    
  )
}

export default LoginSignUp
