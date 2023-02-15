# Conceptos sobre comandos Node.js

1. **¿ Qué hace esta parte del código del archivo mensajes.js ?:**

Estamos creando solo la interfaz que yo voy a utilizar para mostrar y recibir información al usuario:


- **process.stdin:**
~~~
input: process.stdin
~~~

    - Esto lo que hace es que vamos a tener un input, que va ser de tipo proccess.stdin, sabe node que vamos a tener que pausar la ejecución de mi aplicación, que vamos esperar una información, o unos carácteres del usuario.

---

- **process.stdout:**
~~~
output: process.stdout
~~~

    - Para mostrarlo algún mensaje en consola, cuando yo le estoy pidiendo algo al usuario.

---

- **readline.question():** el question lo vamos a ocupar para cuando necesitamos mostrar la información al usuario con la pregunta.

~~~
readline.question()
~~~

## Inquirer

- **inquirer:** esto es un paquetes instala de menu de interfaces, con métodos y todo que nos facilita para crear uno mismo solo y de manera rápida. Mirar las dependencias para saber que esta instalado.

[**ENLACE DE INQUIRER**](https://www.npmjs.com/package/inquirer)

---

- **(Método).prompt:** el metodo (prompt), hace que este esperando las cuestiones (questions), preguntas de que hacer. Mirar su página para entender mejor. Para entender mejor mirar la página

~~~
const { opcion } = await inquirer.prompt( preguntas );
// Leer la explicación de abajo para entender este código
~~~

> **preguntas:** esto es una variable que contiene un arreglo de objetos.

**IMPORTANT:** las propiedades de los objetos del arreglo, son valores que ya están dados de inquirer, leer la página para entender.[**ENLACE DE INQUIRER**](https://www.npmjs.com/package/inquirer)




