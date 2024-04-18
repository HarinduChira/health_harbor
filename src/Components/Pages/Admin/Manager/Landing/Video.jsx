import React from 'react';
import landing from './Landing.mp4'
import './Video.css'

const Video = () => {
  return (
      <video autoPlay loop muted  className='background-emp'>
        <source src={landing} type="video/mp4"/>
      </video>
  );
}

export default Video;
