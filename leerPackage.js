const fs = require('fs');

async function getInfo() {
  try {
    // Leer el archivo package.json y obtener su contenido en formato string
    const contenidoStr = await fs.promises.readFile('package.json', 'utf-8');

    // Convertir el contenido del archivo a formato objeto
    const contenidoObj = JSON.parse(contenidoStr);

    // Calcular el tamaño en bytes del archivo
    const size = Buffer.byteLength(contenidoStr, 'utf8');

    // Crear un objeto 'info' con las propiedades 'contenidoStr', 'contenidoObj' y 'size'
    const info = { contenidoStr, contenidoObj, size };

    // Convertir el objeto 'info' a formato JSON
    const infoJson = JSON.stringify(info);

    // Escribir el objeto JSON en un archivo llamado 'info.json'
    await fs.promises.writeFile('info.json', infoJson);

    // Mostrar el objeto 'info' por consola
    console.log(info);
  } catch (error) {
    throw new Error(`Ha ocurrido un error: ${error.message}`);
  }
}

getInfo();
