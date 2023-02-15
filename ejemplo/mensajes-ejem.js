
require('colors');

const inquirer = require('inquirer');
const { cuestiones, pregunta } = require('./datos');

const interfaceMenu = async() => {

        console.clear();
    
        console.log('==============================='.green);
        console.log('      Seleccione una opción   '.blue);
        console.log('===============================\n'.green);

        const { option } = await inquirer.prompt(cuestiones);

        return Number(option);

}

const pausa = async() => {
    console.log('\n');
    await inquirer.prompt(pregunta);
};


const leerInput = async (message) => {
    const cuestiones = [
        {
            type: 'input',
            name: 'description',
            message,
            validate( value ) {
                if( value.length === 0 ) return 'Por favor ingrese un caracter';
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt( cuestiones );
    return description;

};


module.exports = {
    interfaceMenu,
    pausa,
    leerInput
}