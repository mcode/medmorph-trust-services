const request = require('supertest');
const app = require('../app');

const bundle = {};
describe('Test the root path', () => {
  test('It should echo on anonymize POST', () => {
    return request(app)
      .post('/anonymize')
      .send(bundle)
      .expect(200, bundle);
  });

  test('It should echo on pseudonymize POST', () => {
    return request(app)
      .post('/pseudonymize')
      .send(bundle)
      .expect(200, bundle);
  });

  test('It should echo on reidentify POST', () => {
    return request(app)
      .post('/reidentify')
      .send(bundle)
      .expect(200, bundle);
  });

  test('It should echo on deidentify POST', () => {
    return request(app)
      .post('/deidentify')
      .send(bundle)
      .expect(200, bundle);
  });
});
