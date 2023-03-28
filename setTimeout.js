const temporizador = (callback) =>{

    setTimeout(() => {
        callback();
    }, 5000);

}

let operacion = () =>console.log("Realizando operación");

console.log("¡Iniciando tarea!");
temporizador(operacion); // Metemos la "operacion" al temporizador
console.log("Tarea finalizada")

//orden de salida:
/**
 * 
 * ¡Iniciando tarea!
 * 
 * Tarea finalizada
 * 
 * Realizando operación
 * 
 * La tarea "operacion" tuvo que esperar 5000 milisegundos
 * (5 segundos) para poder ejecutarse, pero al ser asíncrono
 * el programa pudo continuar
 * y finalizar sin esperar la operación
 * 
 * 
 * 
 */