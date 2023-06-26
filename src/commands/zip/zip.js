import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import { cwd } from 'node:process';

export const compress = (params) => {
  try {
    const path = params.split(' ')[0];
    const dest = params.split(' ')[1];

    const readStream = createReadStream(path);
    const writeStream = createWriteStream(dest);
    const brotliStream = createBrotliCompress();

    readStream.pipe(brotliStream).pipe(writeStream);

    readStream.on('error', error => {
      console.error('Ошибка чтения файла:', error);
    });

    writeStream.on('error', error => {
      console.error('Ошибка записи файла:', error);
    });

    brotliStream.on('error', error => {
      console.error('Ошибка сжатия файла:', error);
    });

    writeStream.on('finish', () => {
      console.log(`You are currently in ${cwd()}`);
    });

  } catch (err) {
    console.error(err);
  }
}
