/**
 * Con Node podemos manejar los errores de una manera muy optima, pero primero debemos entender 
 * como Node maneja los errores por defecto. Cuando sucede un error en Node, él por defecto terminara 
 * todo el proceso de nuestro código para avisar que ha ocurrido un error, esto puede ser fatal para 
 * nuestros proyectos, los errores además se notifican por hilos, es decir, que si un error sucede 
 * en el hilo principal del event loop, es decir, el evento queue, el error se avisara desde este 
 * mismo hilo, pero si un error sucede antes desde otro hilo como el hilo de las funciones asíncronas, 
 * el error se avisara desde aquel hilo sin dejar mostrar el error del hilo principal.
 * Nosotros podemos manejar este flujo de errores para que Node no se detenga al momento de que ocurra uno
 *  y lo podamos manejar según nuestros deseos, para esto usamos try y catch. Siendo try el bloque de código que ejecutara la función que puede o no fallar y siendo catch la función que atrapara el error y le especificaremos que hacer con él.
 */

function serompe() {
    return 3 + z;
}

// si sabemos que algo puede romperse mejor lo ponemos en un try para controlarlo y la app no se pare
try{
    serompe();
}catch(err){ // capturando el error
    console.log('se rompio la funcion');
    console.error(err.message); // indicamos que solo nos muestre el errror
    // en aqui podemos tratar el error y ver que hacemos con ello
    console.log('no pasa nada hemos capturado el error!');
}
// nota: sin el try la aplicacion dejaria de funcionar al encontrar ese error

console.log('mensaje del final');