import React from 'react';
import './Landing.css'; 
import Video from './Video';

export const Landing = () => {
  return (
    <div className="page">
      <div className="left-section">
        
        <Video />
        <h1>Welcome To Health Harbor</h1>

      </div>
      <div className="right-section">
        <h2>Right Section</h2>
        <p>This is the content for the right section of the page.</p>
      </div>
    </div>
  );
}


export default Landing;
