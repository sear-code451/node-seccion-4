## Crear nuestra propias banderas:

> **NOTA:** si no sabes que son banderas leer, el archivo "README".

Bueno muy complejo de entender te dejo el código de como hacerlo:

~~~
const argv = require( 'yargs' )
                .option('b', {
                    alias: 'base',
                    type: 'number'
                })
                .argv;
~~~

- **.option('b'):** este va ser el alias de menor abreviatura. como estos:

~~~
npm install -g
~~~

- **alias:** el alias va decir a que se refiere la abreviatura. Tipo como una description.

- **type:** esto indica que tipo de dato espera.