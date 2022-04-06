// importar modulo
// viene instalado por defecto en el CORE de NodeJs
const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (error,data) => {
        callback(data.toString());

    })
}

function crearArchivo(ruta, contenido, callback) {
    fs.writeFile(ruta,contenido, (error)=> {
        if (error) {
            console.error('hubo un problema', error);
        }
    });  
}

function borrarArchivo(ruta, callback) {
    fs.unlink(ruta,callback) // cb - nos dira si hay algun error
}

// crear archivo
//crearArchivo(__dirname+'/12-modulos-archivo1.txt', 'Nuevo archivo creado desde function.');

// invocando a funcion leer
//leer(__dirname+'/12-modulos-archivo.txt', console.log);

// borrar
borrarArchivo(__dirname+'/12-modulos-archivo1.txt', console.log);