import React, {useEffect, useState} from 'react'
import Background from './Background/Background';
import Header from '../../Navigation/Header';
import Hero from './Hero/Hero';
import Content from './Content/Content';
import Title from './Title/Title';
import About from './About/About';
import Footer from '../../Navigation/Footer';
const Home = ({userEmail}) => {

  let heroData = [
      {text1: "Stay" , text2: "Healthy"},    
      {text1: "Get" , text2: "Discounts"},    
      {text1: "Live" , text2: "Longer"},
  ]

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHeroIndex((count) => {return count===2? 0:count+1})
    }, 5000);
  },[])

  return (
    <div id='home'>
        <Header userEmail={userEmail}/> 
        <Background/>
        <Hero
          heroData = {heroData[heroIndex]}
          heroIndex = {heroIndex}
          setHeroIndex = {setHeroIndex}
        />
        <Title subTitle='Our Products' title= 'What We Offer'/>
        <Content/>
        <About/>
        <Footer/>

    </div>
  )
}

export default Home
