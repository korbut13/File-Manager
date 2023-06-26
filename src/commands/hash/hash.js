import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { cwd } from 'node:process';

import { normalizePath } from '../../utils/normalizePath.js';
import { ERRORS } from '../../utils/constants.js';

export const hash = (params) => {
  try {
    const path = normalizePath(params.split(' ')[0]);

    const readStream = createReadStream(path);
    const hash = createHash('sha256');

    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('error', (err) => console.error(ERRORS.OPERATION_FAILED));

    readStream.on('end', () => {
      console.log(hash.digest('hex'));
      console.log(`\nYou are currently in ${cwd()}`)
    });

  } catch (err) {
    console.error(ERRORS.INVALID_INPUT);
  }
}
