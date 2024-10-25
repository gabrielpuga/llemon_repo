import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import BookingForm from './BookingForm.js';

test('Renders the BookingForm heading', () => {
    render(
        <MemoryRouter>
            <BookingForm />
        </MemoryRouter>
    );

    const headingElement = screen.getByText(/make your reservation/i); // Adjust this text based on your component
    expect(headingElement).toBeInTheDocument();
});

