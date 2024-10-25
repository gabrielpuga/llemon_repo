import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Main from './Main.js';
import { fetchAPI } from '../public/api.js';

// Mock the fetchAPI function
jest.mock('../public/api.js', () => ({
    fetchAPI: jest.fn(() => Promise.resolve(['17:00', '17:30', '18:00', '18:30', '19:00'])),
}));

describe('Main Component', () => {
    test('renders children correctly', () => {
        render(
            <MemoryRouter>
                <Main><h1>Test Child</h1></Main>
            </MemoryRouter>
        );
        expect(screen.getByText(/Test Child/i)).toBeInTheDocument();
    });

    test('initializeTimes function sets the correct available times', async () => {
        render(
            <MemoryRouter>
                <Main><h1>Test Child</h1></Main>
            </MemoryRouter>
        );

        // Wait for the times to be set
        await waitFor(() => {
            expect(screen.getByText(/17:00/i)).toBeInTheDocument();
        });

        // Ensure fetchAPI was called
        expect(fetchAPI).toHaveBeenCalled();
    });

    // Add your updateTimes test here


    test('updateTimes function updates available times based on selected date', async () => {
        // Set up a mock for fetchAPI to return times for a specific date
        jest.spyOn(global, 'fetchAPI').mockImplementation(() => Promise.resolve(['18:00', '18:30', '19:00']));

        render(
            <MemoryRouter>
                <Main>
                    <h1>Test Child</h1>
                </Main>
            </MemoryRouter>
        );

        // Simulate selecting a date (you'll need to trigger this in your component)
        const selectedDate = '2024-10-20'; // Use a valid date format
        await act(async () => {
            // Call updateTimes with the selected date
            // Assuming you have a way to call this function in your component
            await Main.prototype.updateTimes(selectedDate);
        });

        // Check that the correct times are displayed
        const updatedTime = await screen.findByText(/18:00/i);
        expect(updatedTime).toBeInTheDocument();

        // Ensure fetchAPI was called with the correct date
        expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
    });
});




