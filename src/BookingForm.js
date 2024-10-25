import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes = [], submitForm }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
  });
  const [isFormValid, setIsFormValid] = useState(true); // Track form validity

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate form
    validateForm({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (data) => {
    // Check if the form is valid
    const isValid = 
      data.date && 
      availableTimes.includes(data.time) &&  // Validate time selection
      data.guests >= 1 && 
      data.guests <= 10;

    setIsFormValid(isValid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the submit function and check the response
    const success = await submitForm(formData);
    if (success) {
      // Save to local storage
      const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      existingBookings.push(formData);
      localStorage.setItem('bookings', JSON.stringify(existingBookings));

      
    }
    navigate('/confirmed'); // Navigate after submission
  };

  return (
    <div className="booking-form">
      <form onSubmit={handleSubmit} aria-label="Booking Form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required // HTML5 validation
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required // HTML5 validation
        >
          {availableTimes.length > 0 ? (
            availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))
          ) : (
            <option>No available times</option>
          )}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required // HTML5 validation
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button type="submit" aria-label="Make Your Reservation" disabled={!isFormValid}>Make Your Reservation</button> {/* Disable if form is invalid */}
      </form>
    </div>
  );
};

export default BookingForm;
