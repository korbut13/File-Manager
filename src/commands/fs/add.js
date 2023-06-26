import { appendFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

import { ERRORS } from '../../utils/constants.js';

export const add = async (params) => {
  try {
    const pathNewFile = join(cwd(), params);
    await appendFile(pathNewFile, '');
    return console.log(`You are currently in ${cwd()}`);

  } catch (err) {
    console.error(ERRORS.INVALID_INPUT);
  }
}
