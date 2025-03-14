import { mostrarProductos } from "./funcionesProductos.js";

function mostrarTodosLosProductos() {
    let contenedor = document.createElement('div');
    contenedor.className = "todosLosProductos"
    contenedor.id = "productos-container";

    mostrarProductos()

    return contenedor;
}

export {mostrarTodosLosProductos}