// Function to update UI
function updateUI(data) {
  document.getElementById('polarity').innerText = `Polarity: ${data.polarity}`;
  document.getElementById('subjectivity').innerText = `Subjectivity: ${data.subjectivity}`;
  document.getElementById('text-snippet').innerText = `Text Snippet: ${data.text}`;
}

// Function to handle form submission
document.getElementById('form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const url = document.getElementById('url').value;
  
  const response = await fetch('/analyze', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({url}),
  });

  const data = await response.json();
  updateUI(data);
  
    async function callMeaningCloudAPI(url) {
      const apiKey = process.env.API_KEY; // This line won't work on the client-side
      const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      return data;
    }
    
  });
  