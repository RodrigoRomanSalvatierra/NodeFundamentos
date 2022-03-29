/**
 * llamada a funciones Callback cuando la principal termine
 */

// callback principal
function Hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola '+nombre);
        miCallback(nombre);
    }, 1500);

}


function Adios(nombre, otroCallback) {
    setTimeout(function () {
       console.log('Adios '+nombre);
       otroCallback(); 
    }, 1000);
    
}

function Hablar(callBackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla..');
        callBackHablar();
    }, 1000);
}


// funcion recursiva
function Conversacion(nombre, veces, callback) {
    if (veces > 0) {
        Hablar(function () {
            Conversacion(nombre, --veces, callback);
        })
    }else{
        Adios(nombre, callback);
    }
    
}


console.log('Iniciando proceso....');

// llamada a funcion callback
Hola('Rodrigo', function(nombre){
    Conversacion(nombre, 5, function() {
        console.log('Proceso terminado..');
    });
});