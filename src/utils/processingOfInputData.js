import { commandProcessing } from "./commandProcessing.js";

export const processingOfInputData = (data) => {

  const dataToArray = data.toString().trim().split(' ');
  const command = dataToArray.shift();
  const params = dataToArray.length ? dataToArray[0].replace(/\s+/g, "") : ''

  commandProcessing(command, params);
}
