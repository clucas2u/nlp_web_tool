global.alert = jest.fn();

// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ someData: 'data' }),
  })
);

// Mocking DOM elements
document.getElementById = jest.fn(() => ({
  value: 'http://example.com',
  addEventListener: jest.fn(),
}));

// Importing the functions to be tested
import { analyzeUrl, validURL } from '../client/index.js';

describe('Testing URL analysis', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('Testing analyzeUrl function', async () => {
    await analyzeUrl();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:8081/analyze',
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: 'http://example.com' }),
      })
    );
  });

  test('Testing validURL function', () => {
    expect(validURL('http://example.com')).toBe(true);
    expect(validURL('invalid-url')).toBe(false);
  });
});
