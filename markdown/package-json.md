## Concepto sobre package.json

**Para que nos sirve?:** "package.json" es la parte inicial de cualquier proyecto de node, nos ayuda a nosotros y a node, a saber que comandos son los que se ejecutan  para ejecutar su aplicación.

- **Parte del script:** ahí podemos escribir nuestros comandos personalizados y decir que con este comando personalizados, nos ejecute esta aplicacion , archivo o entre otras cosas mas. EJEMPLO:
~~~
"scripts": { // Archivo: package.json
    "colors": "npm install colors"
}

npm run colors  // Parte de la terminal: cmd
~~~

> Con este ejemplo ya instalamos el paquete de colors, y bueno así igual podemos crear otros paquetes, y personalizarlos a la hora de ejecutarlo el comando en nuestro archivo package.json .


