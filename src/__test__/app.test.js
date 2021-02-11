const request = require('supertest');
const app = require('../app');

const bundle = {};
describe('Test the root path', () => {
  test('It should echo on anonymize POST', () => {
    return request(app)
      .post('/Bundle/$anonymize')
      .send(bundle)
      .expect(200, bundle);
  });

  test('It should echo on pseudonymize POST', () => {
    return request(app)
      .post('/Bundle/$pseudonymize')
      .send(bundle)
      .expect(200, bundle);
  });

  test('It should echo on reidentify POST', () => {
    return request(app)
      .post('/Bundle/$reidentify')
      .send(bundle)
      .expect(200, bundle);
  });

  test('It should echo on deidentify POST', () => {
    return request(app)
      .post('/Bundle/$deidentify')
      .send(bundle)
      .expect(200, bundle);
  });
});
