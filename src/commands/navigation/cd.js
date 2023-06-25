import { isAbsolute, normalize, resolve, join } from 'node:path';
import { chdir, cwd } from 'node:process';
import { homedir } from 'node:os';


chdir(homedir());

export const cd = (path) => {

  if (isAbsolute(path)) {
    chdir(normalize(path));
  } else {
    chdir(join(cwd(), normalize(path)));
  }
  return `You are currently in ${cwd()}`
}
