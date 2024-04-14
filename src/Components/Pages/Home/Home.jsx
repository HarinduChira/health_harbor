import React, {useEffect, useState} from 'react'
import Background from './Background/Background';
import Header from '../../Navigation/Header';
import Hero from './Hero/Hero';
const Home = () => {

  let heroData = [
      {text1: "Stay" , text2: "Healthy"},    
      {text1: "Get" , text2: "Discounts"},    
      {text1: "Live" , text2: "Longer"},
  ]

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setHeroIndex((count) => {return count===2? 0:count+1})
    }, 6000);
  },[])

  return (
    <div>
        <Header/> 

        <Background/>

        <Hero
          heroData = {heroData[heroIndex]}
          heroIndex = {heroIndex}
          setHeroIndex = {setHeroIndex}
        />
   
    </div>
  )
}

export default Home
