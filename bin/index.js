#!/usr/bin/env node

const program = require('commander');

const colors = require('colors');
const greet = require("../lib/greet");
const order = require('../lib/order');
const list = require('../lib/list');

/*******************************************/

// Print coffee drinks menu
// $ coffee-shop list
// $ coffee-shop ls
program
    .command('list') // sub-command name
    .alias('ls') // alternative sub-command is `ls`
    .description('List coffee menu') // command description

    // function to execute when command is uses
    .action(function () {
        list();
    });


// Order a coffee
// $ coffee-shop order
// $ coffee-shop o
program
    .command('order') // sub-command name
    .alias('o') // alternative sub-command is `o`
    .description('Order a coffee') // command description

    // function to execute when command is uses
    .action(function () {
        //order();
    });


  // Returns a greeting
  // $ coffee-shop greet
  // $ coffee-shop g
  program
      .command('greet') // sub-command name
      .alias('g') // alternative sub-command is `o`
      .description('Provide a greeting') // command description

      // function to execute when command is uses
      .action(function () {
        console.log(
          // wraps text with rainbow color formatting
          colors.rainbow(
            // returns the random greeting text
            greet.greetRandom()) );
      });



// allow commander to parse `process.argv`
program.parse(process.argv);
