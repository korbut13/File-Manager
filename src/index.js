import { stdin, argv } from 'node:process';
import { dirname } from 'node:path';
import { homedir } from 'node:os';

const start = () => {
  let userName;
  let currentCatalog = homedir();

  argv.forEach((arg) => {
    userName = arg.includes('username') ? arg.split('=')[1] : 'Svetlana'
  });

  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${currentCatalog}`);

  stdin.setEncoding('utf8');

  stdin.on('data', (data) => {

    switch (data.trim()) {
      case 'up':
        console.log("Hello");
        currentCatalog = dirname(currentCatalog);
        break;
      case 'ls':
        console.log("Buy");
        break;
      default:
        console.log("я не знаю")
    }

    console.log(`You are currently in ${currentCatalog}`)
  })
}

start();
