const ManagerUsuarios = require('./ManagerUsuarios');

const manager = new ManagerUsuarios();

async function crearYConsultarUsuarios() {
  // Ejemplo de creación de un usuario
  const nuevoUsuario = {
    Nombre: 'Juan',
    Apellido: 'Perez',
    Edad: 25,
    Curso: 'Backend'
  };
  await manager.CrearUsuario(nuevoUsuario);

  // Ejemplo de consulta de usuarios
  const usuarios = await manager.ConsultarUsuarios();
  console.log(usuarios);
}

crearYConsultarUsuarios()
