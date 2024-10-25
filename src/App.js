import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav.js';
import Main from './Main.js';
import BookingPage from './BookingPage.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import Homepage from './Homepage.js';
import Specials from './Specials.js';  // Import Specials component
import CustomersSay from './CustomersSay.js'; // Import CustomersSay component
import Chicago from './Chicago.js'; // Import Chicago component
import Footer from './Footer.js';

function App() {
  return (
    <>
      <Nav />
      <Main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/booking" element={<BookingPage />} /> */}
          <Route path="/booking" element={<Main><BookingPage /></Main>} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/specials" element={<Specials />} /> {/* New route for Specials */}
          <Route path="/customers" element={<CustomersSay />} /> {/* New route for CustomersSay */}
          <Route path="/chicago" element={<Chicago />} /> {/* New route for Chicago */}
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;




