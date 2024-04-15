import { Link } from 'react-scroll'
import './NavigationStyle/Header.css'
import logo from './NavigationStyle/HLogo.png'
import { useEffect, useState } from 'react'
import React from 'react'
import log from '../Pages/Home/Background/log.png'

const Header = () => {

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
        <li className="nav-item"><Link to='home' smooth={true} offset={-200}  duration={500}>Home</Link></li>
        <li className="nav-item"><Link to='content' smooth={true} offset={-300}  duration={500}>Products</Link></li>
        <li className="nav-item"><Link to='about' smooth={true} offset={-100}  duration={500}>About</Link></li>
        <li className="nav-item">Cart</li>
        <li className="nav-item"><Link to='footer' smooth={true} offset={-200}  duration={500}>Contact</Link></li>
        <li className="nav-item-signUp" >
            <img src={log} alt="" />
            <p>Sign Up</p>   
        </li>      
      </ul>
      
    </div>
  )
}

export default Header
