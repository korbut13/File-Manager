import { getUserName } from './getUserName.js'

export const greeting = () => {
  let greetingMessage = getUserName() === undefined
    ? 'The program should start by npm-script start in following way: \n npm run start -- --username=your_username'
    : `Welcome to the File Manager, ${getUserName()}!`;
  return console.log(greetingMessage);
};

export const goodBye = () => {
  return console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
};
