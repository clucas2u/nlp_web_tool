// Import styles
import './styles/base.scss';

// Display an alert to confirm client-side code is running
alert('Client-side code running');

// Function to analyze a URL
export async function analyzeUrl() {
  // Get the URL to analyze from an input field with the id 'url'
  const urlToAnalyze = document.getElementById('url').value;

  // Validate the URL
  if (!validURL(urlToAnalyze)) {
    alert('Please enter a valid URL.');
    return;
  }

  // Make a POST request to your server's '/analyze' endpoint
  const response = await fetch('http://localhost:8081/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: urlToAnalyze }),
  });

  // Parse the JSON response
  const data = await response.json();
}

// Function to validate a URL
export function validURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return !!pattern.test(str);
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('analysis-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    analyzeUrl(); // Call your API function
  });
});
