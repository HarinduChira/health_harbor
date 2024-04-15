import React from 'react'
import logo from './HLogo.png'
import './About.css'
import play from './play.png'

const About = () => {
  return (
    <div className='about'id='about'>
        <div className="about-left">
            <img src={logo} alt="" className='about-logo'/>
            <img src={play} alt="" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT OUR SERVICE</h3>
            <h2>Get to know us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et egestas purus. Donec nec nisl eget nunc porta ultricies. Nulla facilisi. Donec nec nisl eget nunc porta ultricies. Nulla facilisi. Donec nec nisl eget nunc porta ultricies. Nulla facilisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et egestas purus. Donec nec nisl eget nunc porta ultricies. Nulla facilisi. Donec nec nisl eget nunc porta ultricies. Nulla facilisi. Donec nec nisl eget nunc porta ultricies. Nulla facilisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci repudiandae labore temporibus odio ad totam et omnis fugit dolor id, eum aliquid veniam dignissimos sit quasi ipsa culpa cum alias?</p>
           
        </div>
    </div>
  )
}

export default About
