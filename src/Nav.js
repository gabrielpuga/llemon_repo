import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/specials">Specials</Link></li> {/* Link for Specials */}
        <li><Link to="/customers">Customers Say</Link></li> {/* Link for CustomersSay */}
        <li><Link to="/chicago">Chicago</Link></li> {/* Link for Chicago */}
      </ul>
    </nav>
  );
}

export default Nav;


