import { build } from '../app.js';

describe('Http server tests', () => {
  it('Get / -> status code 200', async () => {
    expect.assertions(1);

    const app = await build();

    const response = await app.inject({
      method: 'GET',
      url: '/',
    });

    expect(response.statusCode).toBe(200);
  });
});
