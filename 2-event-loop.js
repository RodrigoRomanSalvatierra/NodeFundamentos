
/**
 * Bucle de Eventos | Asincronia por diseño
 * Event loop: es un proceso con un nucle que gestiona, de forma asincrona todos los eventos de la app
 * que funcione de forma asincrona quiere decir que no se va a bloquear. que todo lo que mandemos se va
 * a ejecutar a parte y el bucle puede seguir recibiendo peticiones.
 * 
 * Los eventos le llegan desde la COLA DE EVENTOS (EVENT QUEUE)
 * 
 * EVENT QUEUE: este contiene todo lo que tenemos en nuestro codigo (funcion, expresion,peticion, eventos)
 * tod0 eso se va a la cola de eventos y se va enviando uno  a uno hacia el EVENTO LOOP
 * 
 * EVENT LOOP: procesa los event queue que les llega si los puede los puede resolver en 1min los resuelve
 * en caso que no lo pueda resolver los envia al THREAD POOL y es ahi en donde se empieza a gestionar de
 * forma asincrona todo (procesos con base de datos, archivos todo lo pesado) con esto se asegura
 * que el Hilo principal no este bloqueado CADA HILO SE ENCARGARA DE GESTIONAR SU PROPIO PROCESO 
 * 
 * THREAD POOL: lo que hace es que para cada peticion que tenga que hacer levanta un hilo nuevo dentro
 * del procesador y automaticamente se encarga de que ese proceso se ejecute con el tiempo que necesite
 * un ves termine lo devuelve al EVENT LOOP luego al EVENT QUEUE
 * 
 * las funciones que tenemos para ver todo es son:
 * PROMESA
 * CALLBACK
 * ASYNC AWAIT
 *
 */