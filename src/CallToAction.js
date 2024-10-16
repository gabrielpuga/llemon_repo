import React from 'react';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/booking'); // Navigate to the booking page
  };

  return (
    <div className="call-to-action">
      <h1>Welcome to Little Lemon!</h1>
      <p>Your favorite place for delicious meals.</p>
      <button onClick={handleClick}>Book a table Now</button>
    </div>
  );
}

export default CallToAction;



