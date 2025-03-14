import { productosApi } from "../services/api.js";

async function mostrarProductos() {
    try {
        let datos = await productosApi();
        
        // Suponiendo que tienes un contenedor con el id 'productos-container'
        const contenedorProductos = document.getElementById("productos-container");
        
        // Limpiar el contenedor antes de agregar nuevos productos (opcional)
        contenedorProductos.innerHTML = '';

        // Usar forEach para recorrer los productos
        datos.forEach((producto) => {
            const { title, price, description, image } = producto;

            // Crear el producto y agregarlo al contenedor
            const productoCard = crearProducto(title, price, description, image);
            contenedorProductos.appendChild(productoCard);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

function crearProducto( nombre, precio, descripcion, image) {
    // Crear contenedor principal
    let card = document.createElement("div");
    card.classList.add("producto-card");

    // Crear imagen
    let divimagen = document.createElement('img');
    divimagen.className = "producto-img";
    divimagen.src = image

    // Crear nombre del producto
    const titulo = document.createElement("h3");
    titulo.textContent = nombre;
    titulo.className = "producto-nombre";

    // Crear precio
    const precioElemento = document.createElement("p");
    precioElemento.textContent = `Precio: $${precio}`;
    precioElemento.className = "producto-precio";

    // Crear descripción
    const descElemento = document.createElement("p");
    descElemento.textContent = descripcion;
    descElemento.classList.add("producto-descripcion");

    // Agregar elementos a la tarjeta
    card.appendChild(divimagen);
    card.appendChild(titulo);
    card.appendChild(precioElemento);
    card.appendChild(descElemento);

    return card;
}

export {crearProducto, mostrarProductos}