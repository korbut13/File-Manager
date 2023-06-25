import { unlink } from "fs";
import { cwd } from "process";

export const rm = (params) => {
  try {
    const path = params.split(' ')[0];
    unlink(path, (err) => {
      if (err) console.error(arr);
      console.log(`You are currently in ${cwd()}`)
    })
  } catch (err) {
    console.error(err)
  }
}
