const request = require('supertest');
const app = require('../app.js');

// Home Page
describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

// Project Summary Page
describe('GET /summary', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/summary')
      .expect(200, done);
  });
});

// Contact Page
describe('GET /contact', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});

// My Resume
describe('GET /resume', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/resume')
      .expect(200, done);
  });
});

// Buddy Page
describe('GET /buddy', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/buddy')
      .expect(200, done);
  });
});


// Boo Page
describe('GET /boo', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/boo')
      .expect(200, done);
  });
});

// Interesting Articles Page
describe('GET /articles', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/articles')
      .expect(200, done);
  });
});


// Resources Page
describe('GET /resources', () => {
  it('should return 200 OK', (done) => {
    request(app)
      .get('/resources')
      .expect(200, done);
  });
});

// This test should fail
describe('GET /random-url', () => {
  it('should return 404', (done) => {
    request(app)
      .get('/reset')
      .expect(404, done);
  });
});


