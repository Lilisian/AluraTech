import { conexion } from "./conexion.js";

const lista = document.querySelector("[data-productos]");

function crearCard(imagen, nombre, precio, id) {
    const card = document.createElement('div');
    card.className = "product-card";
    card.innerHTML = `
        <img src="${imagen}" alt="${nombre}" onerror="this.onerror=null;this.src='path/to/placeholder-image.jpg';">
        <h3>${nombre}</h3>
        <p>${precio}</p>
        <button class="delete-button" data-id="${id}">
            <i class="fa-solid fa-trash"></i>
        </button>
    `;
    return card;
}


conexion.listarProductos()
    .then(productos => {
        productos.forEach(producto => {
            const card = crearCard(producto.imagen, producto.nombre, producto.precio, producto.id); 
            lista.appendChild(card);
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const id = event.currentTarget.getAttribute('data-id');
                eliminarProducto(id);
            });
        });
    })
    .catch(error => {
        console.error('Error al cargar los productos:', error);
    });


    async function eliminarProducto(id) {
        try {
            const response = await fetch(`http://localhost:3000/productos/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // Eliminar el producto del DOM
                document.querySelector(`.delete-button[data-id="${id}"]`).parentElement.remove();
            } else {
                console.error('Error al eliminar el producto');
            }
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    }