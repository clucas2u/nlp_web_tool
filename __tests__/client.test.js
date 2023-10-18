// Importing fetch mock library
const fetchMock = require('jest-fetch-mock');

// Mocking the global fetch function
global.fetch = fetchMock;

// The function you want to test
async function callMeaningCloudAPI(url) {
  const apiKey = "your_test_api_key_here"; // Replace with a test API key
  const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
}

// Writing the test
describe('Testing callMeaningCloudAPI function', () => {
  it('should return the expected data', async () => {
    // Mocking the fetch response
    fetch.mockResponseOnce(JSON.stringify({ polarity: 'positive', subjectivity: 'subjective', text: 'sample text' }));

    // The URL to test
    const testUrl = 'http://example.com';

    // Calling the function
    const result = await callMeaningCloudAPI(testUrl);

    // Assertions
    expect(result).toEqual({ polarity: 'positive', subjectivity: 'subjective', text: 'sample text' });
  });
});
