import fastify from 'fastify';
import autoload from 'fastify-autoload';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

function build() {
  const server = fastify({
    logger: {
      prettyPrint: true,
    },
  });

  server.register(autoload, {
    dir: join(__dirname, 'features'),
  });

  return server;
}

export { build };
