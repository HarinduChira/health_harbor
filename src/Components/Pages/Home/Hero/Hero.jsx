import './Hero.css'
import arrow from '../Background/arrow.png'
import log from '../Background/log.png'

const Hero = ({heroData,setHeroIndex,heroIndex}) => {
  return (
    <div className="hero">

      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <div className="hero-explore">
          <p>Explore the Products</p>
          <img src={arrow} alt='' />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=> setHeroIndex(0)}  className={heroIndex === 0? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=> setHeroIndex(1)}  className={heroIndex === 1? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=> setHeroIndex(2)}  className={heroIndex === 2? "hero-dot orange":"hero-dot"}></li>
        </ul>
      
        <div className="hero-signUp">
          <img src={log} alt="" />
          <p>Sign Up</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
