import { createReadStream } from 'node:fs';
import { cwd } from 'node:process';

import { normalizePath } from '../../utils/normalizePath.js';
import { ERRORS } from '../../utils/constants.js';

export const cat = (params) => {
  try {
    const path = normalizePath(params.split(' ')[0]);

    const readStream = createReadStream(path, 'utf-8');
    readStream.on('data', chunk => console.log(chunk));
    readStream.on('error', (err) => console.error(ERRORS.OPERATION_FAILED));
    readStream.on('end', () => console.log(`You are currently in ${cwd()}`));

  } catch (err) {
    console.error(ERRORS.INVALID_INPUT);
  }
}
