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
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData); // Debug log
  
      const success = await submitForm(formData);
      if (success) {
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        existingBookings.push({ ...formData, guests: Number(formData.guests) });
        
        console.log('Saving to local storage:', existingBookings); // Debug log
        localStorage.setItem('bookings', JSON.stringify(existingBookings));
        
        // Log after setting local storage
        console.log('Bookings in localStorage after saving:', JSON.parse(localStorage.getItem('bookings')));
  
        navigate('/confirmed');
      }
    };
  
    return (
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
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
          
          <button type="submit">Make Your Reservation</button>
        </form>
      </div>
    );
  };
  
  export default BookingForm;
  