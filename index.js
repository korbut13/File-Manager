import { argv } from 'node:process';

let userName;

argv.forEach((arg) => {
  userName = arg.includes('username') ? arg.split('=')[1] : 'Svetlana'
});

console.log(`Welcome to the File Manager, ${userName}!`)
