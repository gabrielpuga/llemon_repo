import React from 'react';
import CallToAction from './CallToAction.js';
import Specials from './Specials.js';
import CustomersSay from './CustomersSay.js';
import Chicago from './Chicago.js';

function Homepage() {
  return (
    <div>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  );
}

export default Homepage;


