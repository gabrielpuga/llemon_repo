import './App.css';
import React from 'react';

function CallToAction() {
  return (
    <div className="call-to-action">
      <div className="cta-content">
        <img src="/assets/images/food1.avif" alt="Delicious Food" className="cta-image" />
        <div className="cta-text">
          <h1>Welcome to Little Lemon!</h1>
          <p>Your favorite place for delicious meals.</p>
          <button>Book a table Now</button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;




