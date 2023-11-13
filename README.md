# API - SuperFans

Integrantes:

- Jeannette Arjona
- Mariano Barberi
- Alejandro Guzmán
- Erick Schiller

## Descripción

API utilizada para la obtención de datos desde la aplicación desarrollada con Swift. Actualmente se encuentra hosteada en Render. Se encuentra conectada a nuestra base de datos, igualmente hosteada en Render.

## Funcionamiento

La principal función de la aplicación "SuperFans" es poder registrar los productos del supermercado utilizando tu cámara, para posteriormente recibir sugerencias de recetas en base a la lista de productos y tus preferencias. La aplicación contendrá información sobre las recetas en texto y en videos utilizando lengua de señas.

## Instrucciones

### Consideraciones

- Asegurarse de que se cuenta con el archivo ".env" con las credenciales correctas de la base de datos.
```bash
PORT= 
DBConfigLink= 
TOKEN_SECRET= 
```

- Asegurarse de no descargar la carpeta de node modules de otro usuario.

### Requisitos

- Instalación de Node.js.

### Comandos

Instalar las librerías necesarias.

```bash
npm install
```

Correr el API.

```bash
node api.js
```

### Pruebas

Utilizar cualquiera de los siguientes links para probar las rutas:

- http://localhost:3000/users
- http://localhost:3000/users/perfiles
- http://localhost:3000/ingredientes

Se deben de poder observar los datos que se están obteniendo desde la base de datos en formato JSON.
