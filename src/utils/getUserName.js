import { argv } from 'node:process';

export const getUserName = () => {
  let userName;

  argv.forEach((arg) => {
    userName = arg.includes('username') ? arg.split('=')[1] : undefined;
  });
  return userName;
};
