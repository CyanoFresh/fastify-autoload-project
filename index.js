import { build } from './app.js';

const server = await build();

server.listen(4000);
