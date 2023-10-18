const request = require('supertest');
const app = require('../server.js'); 
describe('Server Tests', () => {
  let server;

  // Start the server before running tests
  beforeAll(() => {
    server = app.listen(3000);  // Listen on a different port to not conflict with your existing app
  });

  // Close the server after running tests
  afterAll((done) => {
    server.close(() => {
       done();
    });
   });

  // Test for GET /
  it('should get index page', async () => {
    const res = await request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);
  });

  // Test for POST /analyze
  it('should analyze URL and return JSON data', async () => {
    const res = await request(server)
      .post('/analyze')
      .send({ url: 'http://example.com' })
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
