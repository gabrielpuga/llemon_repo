import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function CallToAction() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBooking = () => {
    navigate('/booking'); // Navigate to BookingPage
  };

  return (
    <div className="call-to-action">
      <div className="cta-content">
        <img src="/assets/images/food1.avif" alt="Delicious Food" className="cta-image" />
        <div className="cta-text">
          <h1>Welcome to Little Lemon!</h1>
          <p>Your favorite place for delicious meals.</p>
          <button onClick={handleBooking}>Book a table Now</button> {/* Add onClick handler */}
        </div>
      </div>
    </div>
  );
}

export default CallToAction;





