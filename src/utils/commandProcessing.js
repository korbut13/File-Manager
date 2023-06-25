import { cd } from "../commands/navigation/cd.js";
import { ls } from "../commands/navigation/ls.js";
import { rn } from "../commands/fs/rn.js";
import { add } from "../commands/fs/add.js";
import { cat } from "../commands/fs/cat.js";
import { cp } from "../commands/fs/cp.js";
import { mv } from "../commands/fs/mv.js";
import { rm } from "../commands/fs/rm.js";
import { os } from "../commands/os/os.js";
import { hash } from "../commands/hash/hash.js";

export const commandProcessing = async (command, params) => {
  const commands = { cd, ls, rn, add, cat, cp, mv, rm, os, hash };

  if (commands[command]) {

    await commands[command](params);
  }
}
