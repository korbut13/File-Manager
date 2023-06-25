import { createReadStream, createWriteStream } from 'node:fs';
import { dirname, join, isAbsolute, basename } from 'node:path';
import { chdir, cwd } from 'node:process';

export const cp = (params) => {

  try {
    let path = params.split(' ')[0];
    const pathToNewDirecory = join(params.split(' ')[1], basename(path));

    if (!isAbsolute(path)) {
      path = (join(cwd(), path));
    }

    if (path === pathToNewDirecory) {
      console.log('Such a file already exists in the specified directory')
      throw new Error();
    }

    const readStream = createReadStream(path, 'utf-8');
    const writeStream = createWriteStream(pathToNewDirecory);

    readStream.on('error', (err) => {
      console.error('Enter the correct path');

    });

    writeStream.on('error', (err) => {
      console.error('Enter the correct path');

    });

    writeStream.on('finish', () => {
      console.log(`You are currently in ${cwd()}`)
    });

    readStream.pipe(writeStream);

  } catch (err) {
    console.error('Enter the correct path');
  }
}
