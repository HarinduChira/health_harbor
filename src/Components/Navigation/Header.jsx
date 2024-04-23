
import './NavigationStyle/Header.css'
import logo from './NavigationStyle/HLogo.png'
import { useEffect, useState } from 'react'
import React from 'react'
import log from '../Pages/Home/Background/log.png'
import { NavLink } from 'react-router-dom'

const Header = ({logStatus}) => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500? setSticky(true):setSticky(false);
    })
  }, [])

  const signLogout = () => {
    if (logStatus) {
      return "Log Out";                       
    } else {

      localStorage.clear();
      return "Sign Up"; 
    }
  }

  return ( 
    <div className={`nav ${sticky?'dark-nav':''}`}>
      
      <div className="nav-logo">
        <img src={logo} alt="logo" className="logo"/>
        Health Harbor
      </div>

      <ul className="nav-menu ">
        {logStatus && <li className="nav-item"><NavLink to='/Home' className= "nav-link">Home</NavLink></li> }
        {logStatus && <li className="nav-item"><NavLink to='/Browse Products' className= "nav-link">Products</NavLink></li> }
        {logStatus && <li className="nav-item"><NavLink to='/Cart' className= "nav-link">Cart</NavLink></li> }
        {logStatus && <li className="nav-item">Account</li> }
        <li className={`${logStatus ? 'nav-item-signUp' : 'nav-item-signUp-side'}`}>
            <NavLink to="/SignUp" className="nav-link">
            <button>
            <img src={log} alt="" />
            <p>{signLogout()}</p>              
            </button>
            </NavLink>
              
        </li>      
      </ul>
      
    </div>
  )
}

export default Header
