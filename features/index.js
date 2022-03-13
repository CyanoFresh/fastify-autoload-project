async function routes(fastify, options) {
  fastify.get('/', async () => {
    return {
      hello: 'world',
    };
  });
}

export default routes;
