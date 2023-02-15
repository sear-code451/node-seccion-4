# como usar Object.keys, entries, values:


Mirar enlace de explicación si no te quedo claro: [enlace](https://es.javascript.info/keys-values-entries#object-keys-values-entries)

~~~
let user = {
  name: "John",
  age: 30
};
~~~

Con los métodos **key, entries, values** nos daría lo siguiente:
~~~
Object.keys(user) = ["name", "age"]
Object.values(user) = ["John", 30]
Object.entries(user) = [ ["name","John"], ["age",30] ]
~~~

> En resumen nos da un arreglo de las propiedades del objeto.


