import { unlink } from "fs";
import { cwd } from "process";

import { normalizePath } from "../../utils/normalizePath.js";
import { ERRORS } from "../../utils/constants.js";

export const rm = (params) => {
  try {
    const path = normalizePath(params.split(' ')[0]);
    unlink(path, (err) => {
      if (err) console.error(ERRORS.OPERATION_FAILED);
      console.log(`You are currently in ${cwd()}`)
    })
  } catch (err) {
    console.error(ERRORS.INVALID_INPUT)
  }
}
