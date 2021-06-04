#!/usr/bin/env node

const { program } = require('commander');
program
  .version('0.0.1')
  .option('-d, --debug', 'output extra degugging', false)
  .option('-l, --list', 'show commands list');

program.parse(process.argv);

const options = program.opts();
console.log(options);
