## AluraGeek

AluraGeek es un proyecto desarrollado con el objetivo de practicar habilidades de desarrollo web utilizando tecnologías modernas. Este proyecto simula una tienda en línea que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos, interactuando con una base de datos simulada en formato JSON.

## Tecnologías Utilizadas

- [HTML:] Estructuración del contenido web.

- [CSS:] Diseño y estilos responsivos.

- [JavaScript:] Lógica y funcionalidad del lado del cliente.

- [Node.js:] Entorno para ejecutar código JavaScript en el servidor.

- [JSON-Server:] Simulación de una API RESTful para la base de datos local.

- [Vercel:] Plataforma de despliegue del proyecto.

## Funcionalidades

El proyecto incluye las siguientes funcionalidades:

-[GET]: Obtener la lista de productos desde la base de datos simulada.

-[POST]: Agregar nuevos productos.

-[DELETE]: Eliminar productos existentes.

## Instalación y Configuración

Dado que la base de datos es local, no es posible cargar los productos directamente desde la versión desplegada en Vercel. Para probar las funcionalidades completas, sigue estos pasos:

**Clona el repositorio:**

git clone <url-del-repositorio>
cd <nombre-del-repositorio>

**Instala las dependencias necesarias:**

Asegúrate de tener Node.js instalado.

**Instala JSON-Server de manera global o en el proyecto:**

npm install -g json-server

**Ejecuta el servidor JSON:**

json-server --watch db.json

Esto levantará un servidor local que servirá como nuestra base de datos.

**Conéctalo al proyecto:**

Verifica que la URL de la API en el código JavaScript (normalmente http://localhost:3000) coincide con la URL del servidor JSON que acabas de iniciar.

**Abre el proyecto:**

Puedes abrir el archivo index.html directamente en tu navegador o usar una herramienta como Live Server para un mejor flujo de desarrollo.

Acceso a la Versión Desplegada

El proyecto está desplegado en Vercel y puedes acceder a él a través del siguiente enlace:

AluraGeek en Vercel

Nota: Como se mencionó anteriormente, la funcionalidad de carga de productos no está disponible en la versión desplegada debido a la dependencia de la base de datos local.

## Contribuciones

- **Si deseas contribuir al proyecto, por favor sigue estos pasos:**

Haz un fork del repositorio.

- **Crea una rama para tu nueva funcionalidad o corrección de errores:**

git checkout -b nueva-funcionalidad

- **Realiza tus cambios y haz un commit:**

git commit -m "Descripción de los cambios"

- **Sube tus cambios a tu repositorio:**

git push origin nueva-funcionalidad

- **Crea un Pull Request explicando tus cambios**

##Autor

Este proyecto fue desarrollado como parte de un aprendizaje práctico. Si tienes dudas o sugerencias, no dudes en comunicarte.
