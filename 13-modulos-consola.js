/**
 * Con console podemos imprimir todo tipo de valores por nuestra terminal.
 * 
    console.log: recibe cualquier tipo y lo muestra en el consola.
    console.info: es equivalente a log pero es usado para informar.
    console.error: es equivalente a log pero es usado para errores.
    console.warn: es equivalente a log pero es usado para warning.
    console.table: muestra una tabla a partir de un objeto.
    console.count: inicia un contador autoincremental.
    console.countReset: reinicia el contador a 0.
    console.time: inicia un cronometro en ms.
    console.timeEnd: Finaliza el cronometro.
    console.group: permite agrupar errores mediante identación.
    console.groupEnd: finaliza la agrupación.
    console.clear: Limpia la consola.
 */

var tabla = [
    {a:1, b:'uno'},
    {a:2, b:'dos'}];

console.table(tabla);

// agrupaciones
function funcion1() {
    console.group('funcion1');
    console.log('log de la funcion 1');
    console.log('esto tambien');
    funcion2(); 
    console.groupEnd('funcion1');
}

function funcion2() {
    console.group('funcion2');
    console.log('log de la funcion 2');
    console.log('esto tambien');
    console.groupEnd('funcion2');
}

funcion1();