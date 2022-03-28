import db from '../../db/index.js';
import * as scheme from './schema.js';

/**
 * @param {FastifyInstance} fastify
 * @param {Options} opts
 */
export default async function(fastify, opts) {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: scheme.usersList,
        },
      },
    },
    async (req, res) => {
      const result = await db.query(
        `select *
         from "user"
         limit 10`,
      );

      return result.rows;
    },
  );

  fastify.get(
    '/:id',
    {
      schema: {
        response: {
          200: scheme.user,
        },
      },
    },
    async (req, res) => {
      const result = await db.query(
        `select *
         from "user"
         where id = $1
         limit 1`,
        [req.params.id],
      );

      return result.rows[0];
    },
  );

}