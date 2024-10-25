import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm.js";

const mockSubmitForm = jest.fn().mockResolvedValue(true); // Mock submitForm

describe("BookingForm", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  test("submits form data and saves to local storage", async () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "17:30"]} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );
  
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2024-10-10" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Anniversary" } });
  
    // Submit the form
    fireEvent.click(screen.getByText(/make your reservation/i));
  
    // Wait for the local storage to be updated
    await new Promise(resolve => setTimeout(resolve, 0));
  
    // Check local storage
    const bookings = JSON.parse(localStorage.getItem("bookings"));
    console.log("Bookings in localStorage:", bookings); // Debug log
  
    expect(bookings).toBeTruthy(); // Ensure it's not null
    expect(bookings).toHaveLength(1); // Check if there is one booking
    expect(bookings[0]).toEqual({
      date: "2024-10-10",
      time: "17:00",
      guests: 2,
      occasion: "Anniversary",
    });
  });
  

  test("does not save to local storage if submission fails", async () => {
    // Update mock to return false
    mockSubmitForm.mockResolvedValueOnce(false);

    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "17:30"]} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2024-10-10" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Anniversary" } });

    // Submit the form
    fireEvent.click(screen.getByText(/make your reservation/i));

    // Wait for the local storage to be updated
    await new Promise(resolve => setTimeout(resolve, 0)); // Allow async operation to complete

    // Verify local storage is empty
    const bookings = JSON.parse(localStorage.getItem("bookings"));
    expect(bookings).toBeNull();
  });
});





