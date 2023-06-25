import { access, rename } from 'node:fs';
import { dirname, join, isAbsolute } from 'node:path';
import { chdir, cwd } from 'node:process';

export const rn = (inputData) => {
  try {
    const path = inputData.split(' ')[0];
    const newName = inputData.split(' ')[1];
    const newPath = join(dirname(path), newName);

    if (isAbsolute(path)) {
      chdir(dirname(path));
    } else {
      chdir(join(cwd(), dirname(path)));
    }

    access(newPath, (err) => {
      if (err) {
        rename(path, newName, (err) => {
          if (err) console.error('Failed to rename file', err);
        });
      } else {
        console.error('Such a file already exists');
      }
    })
    return `You are currently in ${cwd()}`
  } catch (err) {
    console.error('Enter the correct data');
  }
}
