#!/usr/bin/env node
const path = require('path');
const fse = require('fs-extra');

fse.copy(path.resolve(__dirname, './configs/'), './', (err) => {
  if(err) {
    console.error(err);
    return false;
  }

  console.log("\x1b[32m", 'Done!', "\x1b[0m");
  return true;
});
