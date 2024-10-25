import React, { useReducer, useEffect } from 'react';

/* global fetchAPI */

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

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <main>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          availableTimes: state.availableTimes,
          updateTimes,
        })
      )}

    </main>
  );
  
}

export default Main;


