// BookingPage.js
import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <div>
      <h1>Book Your Reservation</h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
