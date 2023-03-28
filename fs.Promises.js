const fs = require('fs');

const operacionesAsincronas = async() => {


// escribimos un archivo 

await fs.promises.writeFile('./ejemploPromesa.txt','¡Hola desde promesa!') // (Ruta y nombre de archivo , contenido)
//Utilizar el módulo de promises nos facilita la operación 
//de escribir un archivo, ya que no necesitamos un callback

let resultado = await fs.promises.readFile('./ejemploPromesa.txt','utf-8')//ruta y nombre, codificación

console.log(resultado) // ¡Hola desde promesa!

await fs.promises.appendFile('./ejemploPromesa.txt',' contenido adicional') //ruta y nombre, contenido

//releemos el archivo

await fs.promises.readFile('./ejemploPromesa.txt','utf-8')

console.log(resultado);// veremos el resultado con el contenido agregado

//finalmente borramos el archivo

await fs.promises.unlink('./ejemploPromesa.txt')

}

operacionesAsincronas();

//Tenemos un código mucho más limpio, más simple y más entendible.