import { Link } from 'react-scroll'
import './NavigationStyle/Header.css'
import logo from './NavigationStyle/HLogo.png'
import { useEffect, useState } from 'react'
import React from 'react'
import log from '../Pages/Home/Background/log.png'
import { NavLink } from 'react-router-dom'

const Header = ({userEmail}) => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500? setSticky(true):setSticky(false);
    })
  }, [])

  return ( 
    <div className={`nav ${sticky?'dark-nav':''}`}>
      
      <div className="nav-logo">
        <img src={logo} alt="logo" className="logo"/>
        Health Harbor
      </div>

      <ul className="nav-menu">
        <li className="nav-item"><NavLink to='/'>Home</NavLink></li>
        <li className="nav-item"><NavLink to='/Browse Products'>Products</NavLink></li>
        <li className="nav-item"><NavLink to='/'><Link to='about' smooth={true} offset={-100}  duration={500}>About</Link></NavLink></li>
        <li className="nav-item"><NavLink to='/Cart'>Cart</NavLink></li>
        <li className="nav-item"><Link to='footer' smooth={true} offset={-200}  duration={500}>Contact</Link></li>
        <li className="nav-item-signUp" >
            <NavLink to="/SignUp" className="nav-link">
            <button>
            <img src={log} alt="" />
            <p>Sign Up</p>              
            </button>
            </NavLink>
              
        </li>      
      </ul>
      
    </div>
  )
}

export default Header
