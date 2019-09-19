#!/usr/bin/env node

const program = require('commander');

// import function to load a DNA
const load = require('../lib/load');

// import function to run quick anaylsis on model
const quick = require('../lib/quick');

/*******************************************/

// Loads DNA into model
// $ simpledna load
// $ simpledna l
program
    .command('load') // sub-command name
    .alias('l') // alternative sub-command is `l`
    .description('Loads DNA into model') // command description

    // function to execute when command is uses
    .action(function () {
        load();
    });


// Runs a quick anaylsis on a loaded model
// $ coffee-shop quick
// $ coffee-shop q
program
    .command('quick') // sub-command name
    .alias('q') // alternative sub-command is `o`
    .description('Runs a quick anaylsis on a loaded model') // command description

    // function to execute when command is uses
    .action(function () {
        quick();
    });


// allow commander to parse `process.argv`
program.parse(process.argv);
