import { normalize, isAbsolute, join } from 'node:path';
import { cwd } from 'node:process';

import { ERRORS } from './constants.js';

export const normalizePath = (path) => {
  try {
    const normalizedPath = normalize(path);
    if (isAbsolute(normalizedPath)) {
      return normalizedPath;
    } else {
      return join(cwd(), normalizedPath);
    }
  } catch (err) {
    console.err(ERRORS.INVALID_INPUT)
  }
}
