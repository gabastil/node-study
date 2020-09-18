// This script accepts arguments from the command line when run with node command

// import {combineThem} from './js/custom.js';
import minimist from 'minimist';
// const minimist = require('minimist');

console.log(minimist(process.argv.slice(2)));

// Print all arguments
console.log(process.argv);

// Print first argument
console.log(process.argv[0]);

console.log(`Slice of the process.argv ${process.argv.slice(2)}`);

// Print named argument
process.argv.forEach((k, v) => {
    console.log(k, v);
});

// Print using minimist (from NPM)
// in order for the named flag to be used, it must be preceded with a double dash (--)
const args = minimist(process.argv.slice(2));
console.log(args['name'])
