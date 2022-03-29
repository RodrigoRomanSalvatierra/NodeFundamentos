async function Hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola '+nombre);
            resolve(nombre);
        }, 1500);
    }); 

}


async function Adios(nombre) {
    return new Promise((resolve,reject) =>{
        setTimeout(function () {
           console.log('Adios '+nombre);
           resolve(); 
        }, 1000);
    });
    
}

async function Hablar(nombre) {
    return new Promise ((resolve, reject)=> {
        setTimeout(function () {
            console.log('Bla bla bla bla..');
           resolve(nombre);
           //reject('Hay un Error')
        }, 1000);

    });
}



async function main(){
    let nombre = await Hola('Rodrigo');
    await Hablar();
    await Hablar();
    await Hablar();
    await Adios(nombre);
    console.log('Termina el proceso..');
}

console.log('Inicia el Proceso..');
main();
console.log('Esta es la segunda instruccion');