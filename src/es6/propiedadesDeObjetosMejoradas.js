////////////////////////////////////////////////////////////////////////////
// asignacion de elementos a un objeto:

let nombre = 'ariel';
let age = '30';

// ES 5:

obj = {name: nombre, age: age};

// ES 6 : 

obj2= {nombre,age};
// en ES 6 ya se toma el valor de la variable con su combre sin tener que volver a declararla y asignarla como parametro

// ambas: 
obj3 = {name:nombre, age};
// se pueden usar ambas. En caso que se desee cambira el nombre de una variable, por ejemplo.


console.log(obj);
console.log(obj2);
console.log(obj3);

///////////////////////////////////////////////////////////////////////////////////////////////////////
//ARROW FUNCTION
//estas funciones vienen a solventar 2 cuestiones: simplificar sintaxis y un this no vinculable

const personas = [
    {name: 'ariel', age:'30'},
    {name:'lola', age:'25'}

]

// para iterar por cada uno de estos elementos utilizo el metodo .map
// utilizo una funcion donde obtengo el valor de cada elemento y lo imprimo:

// a listOfNames le pasamos personas con el metodo a utilizar (personas.map) y le pasamos una funcion anonima con el elemento que quiero
//traer, en este caso es el Item, y luego algun bloque de codigo: function(item){...bloque de codigo...}

let listOfNames = personas.map ( function (item){console.log(item.name, item.age);});

let listOfNames1 = personas.map ( function (item){
    console.log(item.name, item.age);
   // console.log(item.age);
  //  console.log(item.name);
})

// las ARROW FUNSTION pueden ser utilizadas como funciones anonimas:

// hacemos lo mismo, llamamos al metodo del objeto: personas.map. y en vez de establecer la funcion anonima
// establecemos el elemento que nesecitamos que es el "item" y con una asignacion de "igual-mayor" (=>)
// vamos a establecer que esto es una funcion anonima que retorna algo. que en este caso es console.log de item.name.


let listOfNames2 = personas.map (item => console.log(item.name));

//otra forma de utilizar ARROW FUNCTIONS es declaramos primero un espacio de memoria reservado (const, var, let)
// seguido una asignacion de parametros (name, age, country)
// y finalmente la flecha con un bloque de codigo especifico  ( =>{...codigo...} ) :
// const listOfPerson = (dato1, dato2, dato3) => { ... };


