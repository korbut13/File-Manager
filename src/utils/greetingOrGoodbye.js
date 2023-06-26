import { getUserName } from './getUserName.js'

export const greeting = () => {
  return console.log(`Welcome to the File Manager, ${getUserName()}!`);
};

export const goodBye = () => {
  return console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
}
