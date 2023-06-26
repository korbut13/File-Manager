import { chdir, cwd } from 'node:process';
import { homedir } from 'node:os';

import { normalizePath } from '../../utils/normalizePath.js';
import { ERRORS } from '../../utils/constants.js';

chdir(homedir());

export const cd = (path) => {
  try {
    chdir(normalizePath(path));
    return console.log(`You are currently in ${cwd()}`)

  } catch (err) {
    console.error(ERRORS.INVALID_INPUT)
  }
}
