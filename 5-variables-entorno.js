/**
 * Las VARIABLES DE ENTORNO son variables externas a nuestra aplicación que residen en el 
 * sistema operativo o en el contenedor de la aplicación que se está ejecutando. 
 * Una variable de entorno es simplemente un nombre asignado a un valor.
 * Por convención, el nombre se escribe con mayúscula y los valores son cadenas de texto, 
 * por ejemplo: PORT=8080.
 * 
 * 
 */

let nombre = process.env.NOMBRE || 'default name';
let web = process.env.WEB || 'WebSiteDefault.com';

console.log(nombre);