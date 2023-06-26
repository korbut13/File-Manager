import { EOL, cpus, homedir, userInfo, arch } from 'node:os';
import { cwd } from 'node:process';

import { ERRORS } from '../../utils/constants.js';

export const os = (params) => {
  try {
    const flag = params.split(' ')[0];
    switch (flag) {
      case '--EOL':
        console.log(JSON.stringify(EOL));
        break;
      case '--cpus':
        const allCpus = cpus();
        console.log(`Overall amount of CPUS is ${allCpus.length}`);
        allCpus.forEach((cpu, index) => console.log(`${index + 1}: model:${cpu.model}, clock rate:${cpu.speed / 1000} GHz`));
        break;
      case '--homedir':
        console.log(homedir());
        break;
      case '--username':
        const usersData = userInfo();
        console.log(usersData.username);
        break;
      case '--architecture':
        console.log(arch());
        break;
      default:
        console.error(ERRORS.INVALID_INPUT);
    };

    return console.log(`\nYou are currently in ${cwd()}`);
  } catch (err) {
    console.error(ERRORS.OPERATION_FAILED);
  }
}
