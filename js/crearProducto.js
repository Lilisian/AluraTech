import { conexion } from "./conexion.js";

const formulario = document.querySelector("[data-formulario]");
async function creaProducto(evento) {

    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        const producto = await conexion.agregarProducto(nombre, precio, imagen);
        console.log('Producto creado:', producto);
        alert('Producto creado exitosamente');
        formulario.reset();
    } catch (error) {
        console.error('Error al crear el producto:', error);
        alert(`Error al crear el producto: ${error.message}`);
    }
}

formulario.addEventListener("submit", evento=> creaProducto(evento));