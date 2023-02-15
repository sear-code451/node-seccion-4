
require( 'colors' );


const completados = () => { 
    this.listadoArr.filter( element => {
        const { completadoEn } = element;
        if (completadoEn !== null) return element;
    }).map( (current, index) => {
        const index2 = `${ index + 1 }`.green;
        const { desc } = current;
        
        console.log( `${index2}. ${desc}` );
    } );
}


const pendientes = () => {
    this.listadoArr.filter( element => {
        const { completadoEn } = element;
        if (completadoEn === null) return element; 
    }).map( (current, index) => {
        const index2 = `${ index + 1 }`.red;
        const { desc } = current;
        
        console.log( `${index2}. ${desc}` );
    } );

}







// const opciones = [ 
//     { id: 1 , nombre: 'Crear tarea' },
//     { id: 2 , nombre: 'Listar tareas' },
//     { id: 3 , nombre: 'Listar tareas completadas' },
//     { id: 4 , nombre: 'Listar tareas pendientes' },
//     { id: 5 , nombre: 'Completar tarea(s)' },
//     { id: 6 , nombre: 'Borrar tarea' },
//     { id: 0 , nombre: 'Salir\n' }
// ];


// const fnOptions = (array, id) => {
//     let filtrador = array.find( current => current.id === id )?.nombre;
//     return filtrador;
// };