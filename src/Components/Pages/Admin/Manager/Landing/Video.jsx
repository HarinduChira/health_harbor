import React from 'react';
import landing from './Landing.mp4'
import './Video.css'

const Video = () => {
  return (
      <video autoPlay loop muted  className='background'>
        <source src={landing} type="video/mp4"/>
    
        Your browser does not support the video tag.
      </video>
  );
}

export default Video;
