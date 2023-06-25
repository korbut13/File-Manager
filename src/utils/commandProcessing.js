import { cd } from "../commands/navigation/cd.js";
import { ls } from "../commands/navigation/ls.js";
import { rn } from "../commands/fs/rn.js";
import { add } from "../commands/fs/add.js";
import { cat } from "../commands/fs/cat.js";

export const commandProcessing = async (command, params) => {
  const commands = { cd, ls, rn, add, cat };

  if (commands[command]) {

    await commands[command](params);
  }
}
