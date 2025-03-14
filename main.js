import { mostrarTodosLosProductos } from "./moduls/productos.js";

let DOM = document.querySelector("#root")

function cargarDOM(DOM) {
    DOM.appendChild(mostrarTodosLosProductos())

    return DOM
}

cargarDOM(DOM)

