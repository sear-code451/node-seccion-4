
const fs = require('fs')

const base = 5;

const crearArchivo = ( base = 5 ) => {
    
    return new Promise((resolve, reject) => {
        if( typeof base !== 'number' ) {
            const message = `El argumento pasado "${base}" es incorrecto`;
            reject( message );
        }
        
        let salida = '';
        
        for( let i = 1; i <= 10; i++ ) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        
        resolve( salida,fs.writeFileSync( `tabla-${base}.txt`, salida ) );
    });
}




// return `salida\n tabla-${base}.txt creado`;

// crearArchivo(base)
//     .then( current => console.log(current) )
//     .catch( err => {throw err} );

module.exports = {crearArchivo};