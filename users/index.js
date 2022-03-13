export default async (fastify) => {
  fastify.get('/', () => {
    return [
      '123', '2234',
    ];
  });
}