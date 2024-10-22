// BookingSlots.js
import React from 'react';

const BookingSlots = ({ availableTimes }) => {
  return (
    <div>
      <h2>Available Booking Slots</h2>
      {availableTimes && availableTimes.length > 0 ? (
        <ul>
          {availableTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      ) : (
        <p>No available slots</p>
      )}
    </div>
  );
};

export default BookingSlots;


