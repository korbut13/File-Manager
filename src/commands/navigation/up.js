import { chdir, cwd } from 'node:process';
import { dirname } from 'node:path';

import { normalizePath } from '../../utils/normalizePath.js'
import { ERRORS } from '../../utils/constants.js';

export const up = () => {
  try {

    const currentPath = cwd(); //d:\Testing
    chdir(dirname(currentPath));
    return console.log(`You are currently in ${cwd()}`);

  } catch (err) {
    console.error(err)
  }
}
