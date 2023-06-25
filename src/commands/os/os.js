import { EOL, cpus, homedir, userInfo, arch } from 'node:os';
import { cwd } from 'node:process';

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
        allCpus.forEach((cpu, index) => console.log(`${index + 1} cpu: model:${cpu.model}, clock rate:${cpu.speed / 1000} GHz`));
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
        console.log('Enter the correct command');
    };

    return console.log(`\nYou are currently in ${cwd()}`);
  } catch (err) {
    console.error(err);
  }
}
