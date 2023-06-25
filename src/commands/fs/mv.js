import { createReadStream, createWriteStream, unlink } from 'node:fs';
import { basename, isAbsolute, join, dirname } from 'node:path';
import { cwd } from 'node:process';
import { fileURLToPath } from 'node:url';

export const mv = (params) => {
  try {
    let path = params.split(' ')[0];
    const newPath = join(params.split(' ')[1], basename(path));

    const readStream = createReadStream(path, 'utf-8');
    const writeStream = createWriteStream(newPath);

    readStream.on('error', (err) => console.error('Enter the correct path'));
    writeStream.on('error', (err) => console.error('Enter the correct path'));

    writeStream.on('finish', () => {
      unlink(path, (err) => {
        if (err) console.error(err);
        console.log(`You are currently in ${cwd()}`)
      })
    })
    readStream.pipe(writeStream);

  } catch (err) {
    console.error('Enter the correct path');
  }
}
