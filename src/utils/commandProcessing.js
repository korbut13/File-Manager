import { cd } from "../commands/cd.js";
import { ls } from "../commands/ls.js";

export const commandProcessing = (command, params) => {
  const commands = { cd, ls };

  if (commands[command]) {

    console.log(commands[command](params))
  }
}
