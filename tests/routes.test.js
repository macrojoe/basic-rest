const request = require('supertest')
const app = require('../index')
describe('Post Endpoints', () => {
  it('should return Hello World', async () => {
    const res = await request(app)
      .get('/greet')
      .send();
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hello World')
  });
  it('should return an Activity of Bored API', async () => {
    const res = await request(app)
      .get('/bored')
      .send();
    expect(res.statusCode).toEqual(200);
    expect(res.text).toMatch(/.*/);
  });
});