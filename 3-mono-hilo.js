/**
 * PROCESO DEL EJEMPLO
 *  1- se abre un proceso de Node, interpreta todo el archivo
 *  2- lo convierte a codigo maquina y lo prepara para ejecutarse
 *  3- proceso termina y se cierra
 * 
 */
console.log('Primer Hilo');

// 2 enviando al event loop instruccion infinita, pero no para si no matamos el proceso o reviente la memoria
let i = 0;
setInterval(function() {
    console.log('Segundo Hilo!');
    console.log(i);
    i++;
    // controlando el event loop en tiempo de ejecucion xq en tiempo de compilacion no se da cuenta
    if (i === 5) {
        var a = 3 + z; // da error xq z no esta declarada
        
    }
}, 1000);

/**
 * lo Malo de que sea Node sea Monohilo es: que si no tenemos el cuidado suficiente 
 * un error para por completo la aplicacion
 * */ 

console.log('Tercer proceso..!');

/* 3 aqui podemos observar que el THREAD POOL envia a otro hilo este console log para que se ejecute
 * muy aparte del hilo que se asigno a la funcion de arriba (infinita)
 */