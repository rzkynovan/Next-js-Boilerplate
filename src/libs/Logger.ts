import pino from 'pino';

import { Env } from './Env.mjs';

let options = {};

if (Env.LOGTAIL_SOURCE_TOKEN) {
  options = {
    transport: {
      target: '@logtail/pino',
      options: { sourceToken: Env.LOGTAIL_SOURCE_TOKEN },
    },
  };
}

export const logger = pino(options);
