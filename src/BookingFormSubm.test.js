import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm.js";

const mockSubmitForm = jest.fn().mockResolvedValue(true);

describe("BookingForm Validation", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("validates form as valid", async () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "17:30"]} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2024-10-10" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Anniversary" } });

    fireEvent.click(screen.getByText(/make your reservation/i));

    // Validate that submitForm was called
    expect(mockSubmitForm).toHaveBeenCalled();
  });

  test("validates form as invalid when guests are less than 1", async () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "17:30"]} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2024-10-10" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "0" } });

    fireEvent.click(screen.getByText(/make your reservation/i));

    // Expect that submitForm was not called
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("validates form as invalid when guests are more than 10", async () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "17:30"]} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2024-10-10" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "11" } });

    fireEvent.click(screen.getByText(/make your reservation/i));

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("validates form as invalid when time is not in available times", async () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "17:30"]} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: "2024-10-10" } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "18:00" } }); // Not available
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });

    fireEvent.click(screen.getByText(/make your reservation/i));

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test("validates form as invalid when date is empty", async () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "17:30"]} submitForm={mockSubmitForm} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: "2" } });

    fireEvent.click(screen.getByText(/make your reservation/i));

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });
});
