//Para correrlo usar "node app -b 2 -l"
const colors= require('colors')
const argv = require('./config/yargs')
const {crearArchivo}= require('./helpers/multiplicar')

console.clear()

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err)) 

/* const n=2
crearArchivo(n)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err)) 
*/