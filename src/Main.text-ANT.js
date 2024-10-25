import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main.js';
import {fetchAPI} from '../public/api.js';

// Mock the fetchAPI function
jest.mock('../public/api.js', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(['17:00', '17:30', '18:00', '18:30', '19:00'])),
}));

describe('Main Component', () => {
  test('renders children correctly', () => {
    render(<Main><h1>Test Child</h1></Main>);
    expect(screen.getByText(/Test Child/i)).toBeInTheDocument();
  });

  test('initializeTimes function sets the correct available times', async () => {
    render(<Main><h1>Test Child</h1></Main>);
    
    // Wait for the times to be set
    const availableTimes = await screen.findByText(/17:00/i);
    expect(availableTimes).toBeInTheDocument();
    
    // Ensure fetchAPI was called
    expect(fetchAPI).toHaveBeenCalled();
  });
});








