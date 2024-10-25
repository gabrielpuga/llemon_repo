import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* global fetchAPI, submitAPI */

const initialState = {
  availableTimes: [],
};

function timesReducer(state, action) {
  switch (action.type) {
    case 'SET_TIMES':
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
}

function Main({ children }) {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(timesReducer, initialState);

  const initializeTimes = async () => {
    const today = new Date(); // Create a Date object for today
    const times = await fetchAPI(today); // Fetch available times for today
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  const updateTimes = async (selectedDate) => {
    const times = await fetchAPI(selectedDate); // Fetch available times for the selected date
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  // Inside your submitForm function
const submitForm = async (formData) => {
  const success = await window.submitAPI(formData);
  if (success) {
    // Get existing bookings from local storage
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    // Add the new booking
    existingBookings.push(formData);
    
    // Save back to local storage
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    navigate('/confirmed');
  }
};

  
  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <main>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          availableTimes: state.availableTimes,
          updateTimes,
          submitForm, // Pass the submitForm function to child components
        })
      )}
    </main>
  );
}

export default Main;