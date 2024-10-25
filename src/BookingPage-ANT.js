import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ availableTimes, updateTimes }) => {
  console.log("Available Times in BookingPage:", availableTimes); // This should log the times
  return (
    <div>
      <h1>Book Your Reservation</h1>
      <p>Please fill out the form below to make a reservation.</p>
      <BookingForm 
        availableTimes={availableTimes} 
        updateTimes={updateTimes} 
        
        />
    </div>
  );
};


export default BookingPage;



