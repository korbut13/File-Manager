import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { basename, join } from 'node:path';
import { cwd } from 'node:process';

import { normalizePath } from '../../utils/normalizePath.js'
import { ERRORS } from '../../utils/constants.js';

export const compress = (params) => {
  try {
    const path = normalizePath(params.split(' ')[0]);
    const fileName = `${basename(path)}.br`;
    const dest = join(normalizePath(params.split(' ')[1]), fileName);

    const readStream = createReadStream(path);
    const writeStream = createWriteStream(dest);
    const brotliStream = createBrotliCompress();

    readStream.pipe(brotliStream).pipe(writeStream);

    readStream.on('error', (err) => {
      console.error(ERRORS.OPERATION_FAILED);
    });

    writeStream.on('error', (err) => {
      console.error(ERRORS.OPERATION_FAILED);
    });

    brotliStream.on('error', (err) => {
      console.error(ERRORS.OPERATION_FAILED);
    });

    writeStream.on('finish', () => {
      console.log(`You are currently in ${cwd()}`);
    });

  } catch (err) {
    console.error(ERRORS.INVALID_INPUT);
  }
}
