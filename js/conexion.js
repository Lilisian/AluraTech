async function listarProductos() {
    const conexion = await fetch('http://localhost:3000/productos');
    const conexionConvertida = await conexion.json();
    
    return conexionConvertida;
}

async function agregarProducto(nombre, precio, imagen) {

    try {
        const conexion = await fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                imagen: imagen
            })
        });

        if (!conexion.ok) {
            throw new Error(`Error al agregar el producto: ${conexion.status} ${conexion.statusText}`);
        }
    
        const conexionConvertida = await conexion.json();
    
        return conexionConvertida;

    } catch (error) {

        throw new Error('Error al agregar el producto');

    }

}

async function eliminarProducto(id) {
    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            // Eliminar el producto del DOM
            const cardToDelete = document.querySelector(`.delete-button[data-id="${id}"]`).parentElement;
            cardToDelete.remove();
        } else {
            console.error('Error al eliminar el producto');
        }
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
    }
}


export const conexion = {
    listarProductos, agregarProducto, eliminarProducto
}

