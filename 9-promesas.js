function Hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola '+nombre);
            resolve(nombre);
        }, 1500);
    }); 

}


function Adios(nombre) {
    return new Promise((resolve,reject) =>{
        setTimeout(function () {
           console.log('Adios '+nombre);
           resolve(); 
        }, 1000);
    });
    
}

function Hablar(nombre) {
    return new Promise ((resolve, reject)=> {
        setTimeout(function () {
            console.log('Bla bla bla bla..');
           //resolve(nombre);
           reject('Hay un Error')
        }, 1000);

    });
}

// llamar funcion
console.log('Iniciando el proceso...');
Hola('Rodrigo')
    .then(Hablar)
    .then(Adios)
    .then((nombre)=>{
    console.log('Terminando proceso');
    })
    .catch(error => {
        console.error('Surgio un error');
        console.error(error);
    })
    ;