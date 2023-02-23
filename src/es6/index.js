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
