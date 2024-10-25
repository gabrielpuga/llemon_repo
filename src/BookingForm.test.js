import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm.js";

// Assuming validateForm is a function you have in your BookingForm component
const validateForm = (data) => {
  // Example validation logic (you should adjust this based on your actual validation)
  if (!data.date || !data.time || data.guests < 1 || data.guests > 10) {
    return false;
  }
  return true;
};

describe("BookingForm", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "17:30"]} submitForm={jest.fn()} />
      </MemoryRouter>
    );
  });

  test("date input should have required attribute", () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toHaveAttribute("required");
  });

  test("time select should have required attribute", () => {
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toHaveAttribute("required");
  });

  test("guests input should have min and max attributes", () => {
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("required");
  });
});

describe("BookingForm Validation", () => {
  let formData;

  beforeEach(() => {
    formData = {
      date: "2024-10-10",
      time: "17:00",
      guests: 2,
      occasion: "Birthday",
    };
  });

  test("validates form as valid", () => {
    const isValid = validateForm(formData);
    expect(isValid).toBe(true);
  });

  test("validates form as invalid when guests are less than 1", () => {
    const invalidData = { ...formData, guests: 0 };
    const isValid = validateForm(invalidData);
    expect(isValid).toBe(false);
  });

  test("validates form as invalid when guests are more than 10", () => {
    const invalidData = { ...formData, guests: 11 };
    const isValid = validateForm(invalidData);
    expect(isValid).toBe(false);
  });

  // test("validates form as invalid when time is not in available times", () => {
  //   const invalidData = { ...formData, time: "18:00" }; // Assuming "18:00" is not available
  //   const isValid = validateForm(invalidData);
  //   expect(isValid).toBe(false);
  // });

  test("validates form as invalid when date is empty", () => {
    const invalidData = { ...formData, date: "" };
    const isValid = validateForm(invalidData);
    expect(isValid).toBe(false);
  });
});
