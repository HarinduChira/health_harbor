import React,{useState} from 'react'
import './LoginSignUp.css'

import user from './user.png'
import email from './email.png'
import password from './password.png'



const CusLogin = () => {

  const [action, setAction] = useState("Login") // login or signup

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login" ? <div></div>: <div className="input">
          <div className="input">
            <img src={user} alt=""/>
            <input type="text" placeholder='Name'/>
          </div>
        </div>}
        <div className="input">
          <img src={email} alt=""/>
          <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
          <img src={password} alt=""/>
          <input type="password" placeholder='Password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forget-password">Lost Password? <span>Click Here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}   onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=> {setAction("Login")}}>Login</div>
      </div>
      
    </div>
  )
}

export default CusLogin
