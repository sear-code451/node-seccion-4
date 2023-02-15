const {
    interfaceMenu,
    pausa,
    leerInput
} = require('./mensajes-ejem');
const Tareas = require('./models/tareas');


console.clear();

const main = async() => {
    
    let opt = 0;
    const tareas = new Tareas();

    do {
        
        opt = await interfaceMenu()
        console.log( {opt} );

        switch (opt) {
            case 1:
                const description = await leerInput('Description:');
                console.log(description);
                tareas.crearTarea( description );
            break;
        
            case 2:
                console.log( tareas._listado );
            break;
        }

        await pausa();

    } while ( opt !== 0 );

}

main();