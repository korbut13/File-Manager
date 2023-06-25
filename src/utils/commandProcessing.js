import { cd } from "../commands/navigation/cd.js";
import { ls } from "../commands/navigation/ls.js";
import { rename } from "../commands/fs/rename.js";

export const commandProcessing = (command, params) => {
  const commands = { cd, ls, rename };

  if (commands[command]) {

    console.log(commands[command](params))
  }
}
