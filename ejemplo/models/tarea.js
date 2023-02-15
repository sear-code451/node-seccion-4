
const { v4: uudiv4 } = require('uuid');


class Tarea {
    id = '';
    description = '';
    completadoEn = null;

    constructor( desc ) {
        this.id = uudiv4();
        this.description = desc;
        this.completadoEn = null;
    }
}

module.exports = Tarea;