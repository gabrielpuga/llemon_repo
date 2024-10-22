import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Homepage from './Homepage';
import Specials from './Specials';  // Import Specials component
import CustomersSay from './CustomersSay'; // Import CustomersSay component
import Chicago from './Chicago'; // Import Chicago component
import Footer from './Footer';

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




