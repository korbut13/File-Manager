import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { cwd } from 'node:process';

export const hash = (params) => {
  try {
    const path = params.split(' ')[0];

    const readStream = createReadStream(path);
    const hash = createHash('sha256');

    readStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    readStream.on('end', () => {
      console.log(hash.digest('hex'));
      console.log(`\nYou are currently in ${cwd()}`)
    }
    )
    readStream.on('error', (err) => console.error(err))

  } catch (err) {
    console.error('Enter correct data');
  }
}
