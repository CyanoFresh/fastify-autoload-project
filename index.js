import { build } from './app.js';

const server = await build();

server.listen(4000);

console.log(server.printRoutes());

process.on('SIGTERM', async () => {
  console.info('SIGTERM signal received. Stopping...');

  await server.close();
});