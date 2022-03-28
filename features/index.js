import fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import config from '../config/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function loadPluginsInFolder(fastify) {
  const files = await fs.readdir(__dirname, {
    withFileTypes: true,
  });

  for (const file of files) {
    let importPath = `./${file.name}`;
    let name = file.name;

    if (file.isDirectory()) {
      importPath += '/index.js';
    } else if (file.isFile()) {
      if (name === 'index.js') {
        continue;
      } else {
        name = name.split('.')[0];
      }
    }

    const feature = await import(importPath);

    fastify.register(feature, {
      prefix: name,
    });
  }
}

/**
 *
 * @param {FastifyInstance} fastify
 * @param {Options} options
 */
async function routes(fastify, options) {
  await loadPluginsInFolder(fastify);

  fastify.get('/', async () => {
    return {
      hello: 'world',
    };
  });
}

export default routes;
