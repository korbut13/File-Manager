import { appendFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cwd } from 'node:process'

export const add = async (inputData) => {
  try {
    const pathNewFile = join(cwd(), inputData);
    await appendFile(pathNewFile, '');
    return console.log(`You are currently in ${cwd()}`);
  } catch (err) {
    // console.error('Enter the correct name')
    console.error(err)
  }
}
