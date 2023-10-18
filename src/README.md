NLP Web Tool API Documentation

Introduction

This API is designed to analyze the sentiment of a given URL using MeaningCloud's Sentiment Analysis API.

Getting Started

Clone the repository.
Run npm install to install dependencies.
Start the server with npm start.
API Endpoints

POST /analyze
Analyzes the sentiment of a given URL.

API Endpoints

POST /analyze
Analyzes the sentiment of a given URL.

Parameters

url (required): The URL to analyze.
Response

JSON object containing the sentiment analysis.

Example

Request: 
curl -X POST http://localhost:3000/analyze -d "url=http://example.com"

Response:

{
  "polarity": "neutral",
  "subjectivity": "subjective",
  "text": "This is an example."
}

Error Codes

500: Internal Server Error
Rate Limiting

Limited to 100 requests per 15 minutes.

Security

This API uses Helmet.js for basic security configurations.

Caching

Results are cached for repeated URLs to improve performance.

Contributing

Please read CONTRIBUTING.md for details on contributing to this project.

License

This project is licensed under the MIT License.