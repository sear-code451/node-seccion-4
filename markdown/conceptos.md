
# Conceptos importantes 

- **(``):** a esto se le llaman backticks, su uso tiene un grado muy bueno, nos permite hacer muchas cosas una de las que no sabemos es:
    - /n : Esto provocará un salto entre linea, en vez de que esten pegados lo veremos como linea por linea. EJEMPLO:
~~~
const multiplicationTable = ( limite, tableNumber ) => {
    let salida = '';
    for( let i = 1; i <= limite ; i++ ) {
        salida += `${tableNumber} x ${i} = ${tableNumber * i}\n`;
    }
    return salida
}

console.log(multiplicationTable(10, 2));
~~~
> Intentar hacer correr ese código para entender la explicación.

---

- **Que entendemos por los comandos que tienen ( -- ):** Bueno entendamos que a eso se les llama bandera, eso sirve para muchos comandos. EJEMPLO:
~~~
node --version
nodemon --version
npm install --save-dev jest
npm install --save-dev cypress

// A todos eso que tienen " --(contenido) ",
// se los llaman o se lo conocen como bandera
~~~
> En resumen a todo eso que usan el menos, ( - or -- ) se los conoce como banderas.


