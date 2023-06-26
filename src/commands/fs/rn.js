import { access, rename } from 'node:fs';
import { dirname, join } from 'node:path';
import { cwd } from 'node:process';

import { normalizePath } from '../../utils/normalizePath.js';
import { ERRORS } from '../../utils/constants.js';

export const rn = (params) => {
  try {
    const path = normalizePath(params.split(' ')[0]);
    const newName = params.split(' ')[1];
    const newPath = join(dirname(path), newName);

    access(newPath, (err) => {
      if (err) {
        rename(path, newPath, (err) => {
          if (err) console.error(ERRORS.OPERATION_FAILED);
        });
      } else {
        console.error('Such a file already exists', `\n${ERRORS.OPERATION_FAILED}`);
      }
    })
    return console.log(`You are currently in ${cwd()}`);

  } catch (err) {
    console.error(ERRORS.INVALID_INPUT);
  }
}
