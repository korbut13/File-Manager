import { stdin, stdout, argv, chdir, cwd } from 'node:process';
import readline from 'readline';
//import { dirname, resolve, join } from 'node:path';
import { homedir } from 'node:os';

import { greeting } from './utils/greeting.js';
import { processingOfInputData } from './utils/processingOfInputData.js';


greeting();
console.log(`You are currently in ${homedir()}`);

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.on('line', (inputData) => {
  processingOfInputData(inputData);
});
