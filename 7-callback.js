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
    setTimeout(() => {
       console.log('Adios '+nombre);
       otroCallback(); 
    }, 1000);
    
}

console.log('Iniciando proceso....');

// llamada a funcion callback
Hola('Rodrigo', function(nombre){
    Adios(nombre, function () {
        console.log('Terminando proceso..');
    })
});