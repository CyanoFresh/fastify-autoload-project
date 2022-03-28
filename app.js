import fastify from 'fastify';
import features from './features/index.js';
import config from './config/index.js';

/**
 * @returns {FastifyInstance}
 */
async function build() {
  const server = fastify({
    logger: {
      prettyPrint: true,
    },
  });

  server.register(features, {
    prefix: config.prefix,
  });

  return server;
}

export { build };
