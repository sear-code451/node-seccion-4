// Requerimientos
require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivos');
const Tareas = require('./models/tareas');
const {
    inquirerMenu,
    pausa,
    leeInput,
    listaTarea,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require('./helpers/inquirer');




// funcion base
console.clear();

const main = async () => {
    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if( tareasDB ) {
        tareas.cargarTareasFromArray( tareasDB );
    }

    await pausa();

    do {
        
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // crear opción
                const desc = await leeInput('Descripción:');
                console.log( desc );
                tareas.crearTarea( desc );
            break;

            case '2':
                opt2 = await listaTarea( tareas.listadoCompleto() );
            break;
            
            case '3':
                tareas.listaPendientesCompletadas(true);
            break;

            case '4':
                tareas.listaPendientesCompletadas(false);
            break;

            case '5':  // completado | pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas( ids );
                console.log(ids);
            break;
            
            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id === '0' ) break;
                const ok = await confirmar( '¿Estás seguro?' );
                console.log( { ok } );
                if( ok ) {
                    tareas.borrarTarea( id );
                    console.log('Tarea borrada exitosamente');
                }
            break;
                
        }

        guardarDB(tareas.listadoArr );

        await pausa();
        
    } while (opt !== '0');
    
    
}

main();


// const tareas = new Tareas();
// const tarea = new Tarea('Comprar comida');

// tareas._listado[tarea.id] = tarea;

// console.log( tareas );