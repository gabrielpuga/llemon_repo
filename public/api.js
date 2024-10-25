const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
};

// Expose fetchAPI to the window object
window.fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
          result.push(i + ':00');
      }
      if (random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};

// Function to submit booking data
window.submitAPI = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      });
  
      if (response.ok) {
        return true; // Booking was successful
      } else {
        console.error('Failed to submit booking:', response.statusText);
        return false; // Booking failed
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      return false; // Booking failed due to an error
    }
  };
  

  