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
            <p>Welcome to Health Harbor! We're more than just a pharmacy store; we're your partners in health, dedicated to providing top-notch service and premium products for a happier, healthier life.

</p>
            <p>What sets us apart? Our carefully curated selection of pharmaceuticals, supplements, and wellness products. From prescriptions to holistic alternatives, we've got everything you need, conveniently delivered to your doorstep.

</p>
            <p>It's not just about the products; it's about the experience. Our user-friendly website makes it easy to shop, and our knowledgeable pharmacists are here to provide personalized recommendations, ensuring you get the right solutions for your health needs. Your safety and satisfaction are our priorities - shop with confidence at Health Harbor.
</p>
           
        </div>
    </div>
  )
}

export default About
