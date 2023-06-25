import { access, rename as renameFile } from 'node:fs';
import { dirname, join, isAbsolute } from 'node:path';
import { chdir, cwd } from 'node:process';

export const processingParamsForRename = (inputData) => {
  try {
    const path = inputData.split(' ')[0];
    const newName = inputData.split(' ')[1];
    const newPath = join(dirname(path), newName);

    if (isAbsolute(path)) {
      chdir(dirname(path));
    } else {
      chdir(join(cwd(), dirname(path)));
    }


  } catch (err) {
    console.error('Enter the correct data');
  }
}
