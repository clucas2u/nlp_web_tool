// Import the handleSubmit function from formHandler.js
import { handleSubmit } from '../client/js/formHandler.js';

// Mock the alert function
global.alert = jest.fn();

// Mock event object
const event = {
  preventDefault: jest.fn(),
};

// Describe the test suite
describe('Testing form submission', () => {

  // Individual test
  test('Testing handleSubmit function', () => {
    // Call the handleSubmit function with the mock event
    handleSubmit(event);

    // Check if preventDefault was called
    expect(event.preventDefault).toHaveBeenCalled();

    // Check if handleSubmit is defined
    expect(handleSubmit).toBeDefined();
  });

});
