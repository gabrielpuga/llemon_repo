import React from 'react';
import { render, screen } from '@testing-library/react';
import Main, { timesReducer } from './Main';

describe('Main Component', () => {
  test('renders children correctly', () => {
    render(<Main><h1>Test Child</h1></Main>);
    expect(screen.getByText(/Test Child/i)).toBeInTheDocument();
  });

  test('initializeTimes function sets the correct available times', () => {
    const initialState = {
      availableTimes: [],
    };

    const action = {
      type: 'SET_TIMES',
      payload: ['17:00', '17:30', '18:00', '18:30', '19:00'],
    };

    const newState = timesReducer(initialState, action);
    expect(newState.availableTimes).toEqual(['17:00', '17:30', '18:00', '18:30', '19:00']);
  });

  test('updateTimes function returns the same available times', () => {
    const initialState = {
      availableTimes: ['17:00', '17:30', '18:00', '18:30', '19:00'],
    };

    const action = {
      type: 'SET_TIMES',
      payload: ['17:00', '17:30', '18:00', '18:30', '19:00'],
    };

    const newState = timesReducer(initialState, action);
    expect(newState.availableTimes).toEqual(['17:00', '17:30', '18:00', '18:30', '19:00']);
  });
});




