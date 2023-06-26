import { createReadStream, createWriteStream } from 'node:fs';
import { join, basename } from 'node:path';
import { cwd } from 'node:process';

import { normalizePath } from '../../utils/normalizePath.js';
import { ERRORS } from '../../utils/constants.js';

export const cp = (params) => {

  try {
    const path = normalizePath(params.split(' ')[0]);
    const pathToNewDirecory = normalizePath(join(params.split(' ')[1], basename(path)));

    if (path === pathToNewDirecory) {
      console.log('Such a file already exists in the specified directory')
      throw new Error();
    }

    const readStream = createReadStream(path, 'utf-8');
    const writeStream = createWriteStream(pathToNewDirecory);

    readStream.on('error', (err) => {
      console.error(ERRORS.OPERATION_FAILED);
    });

    writeStream.on('error', (err) => {
      console.error(ERRORS.OPERATION_FAILED);
    });

    writeStream.on('finish', () => {
      console.log(`You are currently in ${cwd()}`)
    });

    readStream.pipe(writeStream);

  } catch (err) {
    console.error(ERRORS.INVALID_INPUT);
  }
}
