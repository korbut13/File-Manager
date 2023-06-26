import { stdin, stdout } from 'node:process';
import readline from 'readline';
import { homedir } from 'node:os';

import { greeting, goodBye } from './utils/greetingOrGoodbye.js';
import { processingOfInputData } from './utils/processingOfInputData.js';


greeting();
console.log(`You are currently in ${homedir()}`);

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.on('line', (inputData) => {
  if (inputData === '.exit') {
    goodBye();
    rl.close();
  } else {
    processingOfInputData(inputData);
  }
});

rl.on('SIGINT', () => {
  goodBye();
  rl.close();
});
