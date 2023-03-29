const fs = require('fs');

class ManagerUsuarios {
    async CrearUsuario(usuario) {
        const contenido = await fs.promises.readFile('./Usuarios.json', 'utf-8')
            //.catch((error) => console.log(error));

        const usuarios = JSON.parse(contenido);
        usuarios.push(usuario);

        await fs.promises.writeFile('./Usuarios.json', JSON.stringify(usuarios))
           // .catch((error) => console.log(error));
    }

    async ConsultarUsuarios() {
        const contenido = await fs.promises.readFile('./Usuarios.json', 'utf-8')
           // .catch((error) => console.log(error));

        const usuarios = JSON.parse(contenido);
        return usuarios;
    }
}

module.exports = ManagerUsuarios;
