import React, { useReducer, useEffect } from 'react';

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

  const initializeTimes = () => {
    const times = ['17:00', '17:30', '18:00', '18:30', '19:00'];
    dispatch({ type: 'SET_TIMES', payload: times });
    console.log("Initialized Available Times:", times);
  };

  const updateTimes = (selectedDate) => {
    // For now, we'll return the same available times.
    dispatch({
      type: 'SET_TIMES',
      payload: ['17:00', '17:30', '18:00', '18:30', '19:00']
    });
  };
  

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <main>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          availableTimes: state.availableTimes,
          updateTimes, // Ensure this is passed correctly
        })
      )}
    </main>
  );
  
}

export default Main;






