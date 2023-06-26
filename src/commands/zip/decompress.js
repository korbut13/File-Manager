import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { basename, join } from 'node:path';
import { cwd } from 'node:process';

import { normalizePath } from "../../utils/normalizePath.js";
import { ERRORS } from "../../utils/constants.js"

export const decompress = (params) => {
  try {
    const path = normalizePath(params.split(' ')[0]);
    const fileName = `${basename(path).split('.').slice(0, -1).join('.')}`;
    const dest = join(normalizePath(params.split(' ')[1]), fileName);

    const readStream = createReadStream(path);
    const writeStream = createWriteStream(dest);
    const brotliDecompressStream = createBrotliDecompress();

    readStream.on('error', (err) => console.error(1, err));
    writeStream.on('error', (err) => console.error(2, err));
    brotliDecompressStream.on('error', (err) => console.error(3, err));

    writeStream.on('finish', () => console.log(`You are currently in ${cwd()}`))

    readStream.pipe(brotliDecompressStream).pipe(writeStream);

  } catch (err) {
    console.error(err);
  }
}
