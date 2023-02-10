const {crearArchivo} = require('./helpers/multiplicar-2');
require('colors');
const argv = require( './config/yargs' );

console.clear();
console.log( argv );


crearArchivo(argv.b, argv.l, argv.h)
.then( current => console.log(current.green) )
.catch( err => console.log( err ) );

// const base = 5;
// console.log('base: yargs', argv.b);
