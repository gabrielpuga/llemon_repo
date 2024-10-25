// BookingPage.js
import React from 'react';
import BookingForm from './BookingForm.js';

const BookingPage = ({ availableTimes, updateTimes, submitForm }) => {
  return (
    <div>
      <h1>Book Your Reservation</h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />
    </div>
  );
};

export default BookingPage;
