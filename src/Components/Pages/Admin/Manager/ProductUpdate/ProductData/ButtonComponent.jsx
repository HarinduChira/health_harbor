import React from 'react';
import './ButtonComponent.css'; 
const ButtonComponent = () => {
  const handleAcceptClick = () => {
    console.log('Accept button clicked!');
  };

  const handleRejectClick = () => {
    console.log('Reject button clicked!');
  };

  return (
    <div>
      <button className="accept-button" onClick={handleAcceptClick}>
        Accept
      </button>
      <button className="reject-button" onClick={handleRejectClick}>
        Reject
      </button>
    </div>
  );
}

export default ButtonComponent;
