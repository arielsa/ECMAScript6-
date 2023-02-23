
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PARAMETROS POR DEFECTO: podemos establecer ciertos parametros a una funcion por defecto

//antes de es6 :
function newfunction (name,age,country){

    // asignacion de valores a variable mas una opcion por defecto
    var name = name || 'oscar';
    var age = age || 18;
    var pais = country || 'argentina' 

    //imprimimos:

    console.log(name,age,pais); 
}

//en ES6, le asignamos valores por defecto en los parametros :

function newfunction2(name='oscar', age= 18, country='argentina'){

    console.log(name,age,country);

}

//si llamo a la newfuntion2 me imprime los parametros por defecto

newfunction2();

//tambien puedo modificar los valores de sus parametros asignandolos:

newfunction2 ('ariel','30','paraguay');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TEMPLATE LITERALS: 

//antes de ES6 agregabamos el espacio vacio entre comillas: 

let hello = "Hello";

let world = "world";

let frase= hello + " " + world + "!";

console.log (frase);

//utilizamos la sintaxis parecida a la interpolacion entre COMILLAS FRANSESAS ( ` ` ) 
//y el espacio no lo concatenamos ni entrecomillamos

let frase2 = `${hello} ${world}`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MULTILINEAS EN LOS STRINGS:

// antes de ES6:
let lorem = "lorem impsum asd sad asd asd asd \n"
+ "zxcxz zxc z zxc zxzc zxc ";

// despues de ES6: utilizamos la COMILLA FRANSESA (``) y hacemos el simple salto de linea:

let lorem2 = `una linea de texto 
otra linea de texto`;

console.log (lorem);
console.log(lorem2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//COMO EXTRAER ELEMENTOS DE UN OBJETO:

//EL OBJETO:

let person= {
    'name':'ariel',
    'age':'30',
    'country': 'ARG'
}

// extrancion previa al ES6:

console.log(person.name,person.age);

//despues de ES6, asignamos a una variable los 
//elementos que sabemos que tiene un objeto y declaramos el objeto luego:

let {name, age, country}= person;
console.log (name, age, country );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OPERADOR DE PROPAGACION:

let team1 = ['juan','carlos','marcelo'];
let team2 = ['monica','marcela','maria','lola'];

// el operador de propagacion se utiliza con tres puntos (...) previos al array (...array) 
// y extrae los elementos de ese array. por ejemplo asi:

let team3 = ['david',...team1,...team2];

console.log(team3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LET, CONST y VAR : 
// LEt solo esta disponible en el scope, es decir en el bloque de codigo en el que este esta encerrado, el scope o contexto.
// VAR en cambio es global
// CONST no es reaccinable






