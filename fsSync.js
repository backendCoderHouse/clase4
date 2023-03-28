const fs = require('fs');
// como comentamos en las diapositivas, fs nos permitirá acceder a las operaciones para archivos

fs.writeFileSync('./ejemplo.txt' , "¡Hola, Coders, estoy en un archivo")

/**
 * Primer operación para escribir un archivo,
 * el primer argumento/parámetro es la ruta y
 * nombre del archivo sobre el que queremos trabajar
 * el segundo argumento es el contenido
 * ¡Super sencillo!
 * 
 */

if (fs.existsSync('./ejemplo.txt')){
    //existSyncdevuelve true si el archivo existe
    // y false si no existe
   
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')

    /**
     * readfileSync lee el contenido del archivo,es importante
     * indicar la codificación del archivo. 
     * en este curso solo abarcaremos utf-8 
     * 
     */
    console.log(contenido)// mostramos por consola el contenido

    fs.appendFileSync('./ejemplo.txt', ' Me agregaron al final')

    /**
     * appendFileSync buscara la ruta del archivo, si no
     * lo encuentra, lo crea.
     * si lo encuentra, no sobreescribe sino que 
     * agrega el contenido al final.
     */

    
    // volvemos a leer el contenido y actualizamos la
    // variable
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')

    console.log(contenido)// actualizado

    fs.unlinkSync('./ejemplo.txt');
    // esta última línea elimina el archivo
}
