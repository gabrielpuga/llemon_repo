// submitAPI.js

/**
 * Submits the booking data to the server.
 * @param {Object} formData - The booking data to submit.
 * @returns {Promise<boolean>} - Returns true if the submission was successful, otherwise false.
 */
const submitAPI = async (formData) => {
    try {
      // Here you would typically send a POST request to your server
      const response = await fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      });
  
      // Check if the response is okay (status 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // You can return true if the submission is successful
      return true;
    } catch (error) {
      console.error('Error submitting data:', error);
      return false; // Return false if there's an error
    }
  };
  
  export default submitAPI;
  