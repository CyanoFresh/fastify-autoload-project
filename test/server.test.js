import { build } from '../app.js';
import config from '../config/index.js';

describe('Http server tests', () => {
  let app;

  beforeAll(async () => {
    app = await build();
  });

  it('GET / -> status code 200', async () => {
    expect.assertions(1);

    const response = await app.inject({
      method: 'GET',
      url: `${config.prefix}/`,
    });

    expect(response.statusCode).toBe(200);
  });
});
