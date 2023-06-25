import { createReadStream } from 'node:fs';
import { chdir, cwd } from 'node:process';
import { dirname, join, isAbsolute } from 'node:path';


export const cat = (params) => {
  try {
    const path = params.split(' ')[0];

    if (isAbsolute(path)) {
      chdir(dirname(path));
    } else {
      chdir(join(cwd(), dirname(path)));
    }

    const stream = createReadStream(path, 'utf-8');
    stream.on('data', chunk => console.log(chunk));
    stream.on('end', () => console.log(`You are currently in ${cwd()}`));

  } catch (err) {
    console.error('Enter the correct path to the file');
  }
}
