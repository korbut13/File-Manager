import { commandProcessing } from "./commandProcessing.js";

export const processingOfInputData = (inputData) => {

  const dataToArray = inputData.toString().trim().split(' ');
  const command = dataToArray.shift();
  // const params = dataToArray.length ? dataToArray[0].replace(/\s+/g, "") : '';
  const params = dataToArray.length ? dataToArray.join(' ') : '';
  commandProcessing(command, params);
}
