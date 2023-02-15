
require('colors');


const pregunta = [
    {
        type: 'input',
        name: 'enter',
        message: ' ¿ Está seguro ? '.red
    }
];


const cuestiones = [
    {
        type: 'list',
        name: 'option',
        message: '¿ Qué desea hacer ?',
        choices: [            
            {
                value: 1,
                name: '1. Crear tarea'
            },

            {
                value: 2,
                name: '2. Listar tarea'
            },

            {
                value: 3,
                name: '3. Listar tareas completadas'
            },

            {
                value: 4,
                name: '4. Listar tareas pendientes'
            },

            {
                value: 5,
                name: '5. Completar tarea(s)'
            },

            {
                value: 6,
                name: '6. Borrar tarea'
            },

            {
                value: 0,
                name: '0. Salir\n'
            },
        ]
    }
];


module.exports = {
    cuestiones,
    pregunta
}

