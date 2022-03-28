import { build } from '../app.js';
import config from '../config/index.js';

describe('Users feature tests', () => {
  let app;

  beforeAll(async () => {
    app = await build();
  });

  it('GET / -> list users', async () => {
    expect.assertions(2);

    const response = await app.inject({
      method: 'GET',
      url: `${config.prefix}/users`,
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toStrictEqual([
      {
        id: 1,
        password: '123123',
        username: 'alex',
      },
    ]);
  });

  it('GET /1 -> first user', async () => {
    expect.assertions(2);

    const response = await app.inject({
      method: 'GET',
      url: `${config.prefix}/users/1`,
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toStrictEqual({
      id: 1,
      password: '123123',
      username: 'alex',
    });
  });
});
