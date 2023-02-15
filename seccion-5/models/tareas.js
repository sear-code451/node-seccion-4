
require('colors');
const Tarea = require('./tarea');
const inquirer = require('inquirer');


/* 
    _listado:
    {
        uuid-12345-12412: { id: 12, desc: asd, completadoEn: 92115 },
        uuid-12345-12412: { id: 12, desc: asd, completadoEn: 92115 },
        uuid-12345-12412: { id: 12, desc: asd, completadoEn: 92115 },
    }

*/


class Tareas {

    _listado = {};

    get listadoArr() {
        const list = [];
        // si no entendiste mirar:[https://es.javascript.info/keys-values-entries#object-keys-values-entries]
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            list.push( tarea );
        } )

        return list;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea ( id ) {
        if( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        } )
        
    }

    // cargarTareasFromArray( tarea = [] ) {}

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        const arreglo = this.listadoArr.map( (element, index) => {

            const index2 = index + 1;
            const { desc, completadoEn } = element;    
            const estado = completadoEn === null 
            ? 'Pendiente'.red
            : 'Completada'.green;

            element = {
                value: `${ index2 }`,
                name: `${ index2 }. ${desc} :: estado ${estado}`
            }
            return element;
        })

        const lista = [
            {
                type: 'list',
                name: 'tareas',
                message: 'Lista de tareas:',
                choices: arreglo
            }
        ];
        return lista;
    }

    listaPendientesCompletadas( completadas ) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach ( tarea => {
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                                ? 'Completado'.green
                                : 'Pendiente'.red;
            if( completadas ) {
                // mostrar completadas
                if( completadoEn ) {
                    contador += 1
                    console.log( ( 
                        `${ (contador + '.').green } ${ desc } ::  ${completadoEn.green}`
                     ) )
                }
            }else {
                if( !completadoEn ) {
                    contador += 1;
                    console.log( 
                        `${ (contador + '.'.green) } ${desc} :: ${ estado }`
                     )
                }
            }

        } )

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        } )

        this.listadoArr.forEach( tarea => {
            if( !ids.includes( tarea.id ) ) {
                this._listado[tarea.id].completadoEn = null;
            }
        } )

    }

}


module.exports = Tareas;





