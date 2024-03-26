# Sneakers Store API - drenvio

Este proyecto consiste en la creación de una API utilizando Express para una tienda de zapatillas. La API tiene como objetivo proporcionar funcionalidades para gestionar el inventario de productos y precios especiales para clientes.

El proyecto está construido sobre una _aquitectura MVC (Modelo-Vista-Controlador)_, que es un patrón arquitectónico comúnmente utilizado en el desarrollo de aplicaciones web.

A continuacion se detalla de manera breve una descripción de cada una de las carpetas y archivos:

- **controllers:** Contiene archivos que definen controladores para manejar las solicitudes HTTP y las respuestas asociadas.
- **models:** Contiene archivos que definen los modelos de datos de la aplicación, que representan la estructura y la lógica de los datos.
 - **routes:** Contiene archivos que definen las rutas de la aplicación, que mapean las solicitudes HTTP a los controladores correspondientes.
- **services:** Contiene archivos que definen servicios auxiliares, que pueden encapsular lógica de negocio compleja o tareas comunes utilizadas en varios lugares de la aplicación como la autentificacion.
- **data:** Contiene archivos JSON que con datos iniciales para la aplicación, como productos, clientes y marcas.
- **config:** Contiene archivos de configuración de la aplicación, como la configuración de la base de datos y la creacion de tablas de ser necesario.

**La aplicación cuenta con dos rutas públicas:**

> /products

Esta ruta devuelve una matriz que contiene solo los productos que están actualmente con _almenos un item_ en stock.

> /price/{user_id}/{nombre_producto} 

Algunos clientes de este negocio tienen precios especiales para ciertas marcas. Esta ruta devuelve el precio especial para el cliente, el cliente y la marca en cuestion, si está disponible. Si el cliente no tiene un precio especial para la marca, la ruta devuelve el precio base del producto como precio final.

**NOTA:** Todas las rutas tienen una minima proteccion de autentificacion, por lo cual deberá pasar un valor ```"x-tenant-id"``` con el valor ```"drenvio"``` en la cabecera de la solicitud, de lo contarrio verá una respuesta de ```UNAUTORIZED ```.

## Requisitos previos

Antes de comenzar a utilizar esta API, asegúrese de tener instalado lo siguiente en el sistema:

1. **Node.js**: Puede descargarlo directamente desde [nodejs.org](https://nodejs.org/).

2. **MongoDB**: La API utiliza MongoDB como base de datos. Debe tener MongoDB instalado y en funcionamiento en tu sistema. Puede descargarlo desde [mongodb.com](https://www.mongodb.com/).

3. **Git** (opcional): Si desea clonar este repositorio desde GitHub, necesitará tener Git instalado en tu sistema. Puede descargarlo desde [git-scm.com](https://git-scm.com/).

4. **Editor de código**: Se recomienda utilizar un editor de código como Visual Studio Code, Atom o Sublime Text para trabajar en el código fuente de la API.

Una vez que haya instalado estos requisitos previos, estará listo para clonar el repositorio, instalar las dependencias y ejecutar la API en su máquina local.

## Instalacion

> Recuerde tener Instalado NodeJS y MongoDB en su computadora.

1. Clone este repositorio en su máquina:

```sh
git clone https://github.com/ramos29pages/sneakers-store-drenvio.git
```

2. Navegue hasta la carpeta del proyecto
```sh
cd sneakers-store-drenvio
```

3. Instale las dependencias utilizando npm y ejecute la aplicacion
```sh
npm install
npm start
```

## Uso

### Ruta  ```/products```

Esta ruta devuelve una matriz que contiene solo los productos que están actualmente en stock, productos que poseen almenos un item en la tienda de zapatillas.

#### Ejemplo de solicitud:

```bash
GET /products HTTP/1.1
HEADER X-TENANT-ID : drenvio
Host: localhost:3000
```
#### Ejemplo de respuesta exitosa:

```sh
[
  {
    "_id": "6601d0f5f7b757187262268f",
    "name": "Zapatillas Nike Air Max",
    "inStock": 20,
    "basePrice": 120000,
    "brand": "6601cce8565c1c07f6aa3a3a",
    "__v": 0
  },
  {
    "_id": "6601d0f5f7b7571872622692",
    "name": "Zapatillas Adidas Ultraboost",
    "inStock": 15,
    "basePrice": 140000,
    "brand": "6601cce9565c1c07f6aa3a3b",
    "__v": 0
  },
  {
    "_id": "6601d0f5f7b7571872622695",
    "name": "Zapatillas Puma RS-X",
    "inStock": 10,
    "basePrice": 100000,
    "brand": "6601cce9565c1c07f6aa3a3c",
    "__v": 0
  },
  {
    "_id": "6601d0f5f7b7571872622698",
    "name": "Zapatillas Converse Chuck Taylor",
    "inStock": 25,
    "basePrice": 80000,
    "brand": "6601cce9565c1c07f6aa3a3d",
    "__v": 0
  },
  {
    "_id": "6601d0f6f7b757187262269b",
    "name": "Zapatillas Vans Old Skool",
    "inStock": 18,
    "basePrice": 90000,
    "brand": "6601cce9565c1c07f6aa3a3e",
    "__v": 0
  },
  {
    "_id": "6601d0f6f7b757187262269e",
    "name": "Zapatillas Reebok Classic Leather",
    "inStock": 12,
    "basePrice": 95000,
    "brand": "6601cce9565c1c07f6aa3a3f",
    "__v": 0
  },
  {
    "_id": "6601d0f6f7b75718726226a1",
    "name": "Zapatillas New Balance 574",
    "inStock": 22,
    "basePrice": 110000,
    "brand": "6601cce9565c1c07f6aa3a40",
    "__v": 0
  },
  {
    "_id": "6601d0f7f7b75718726226ad",
    "name": "Zapatillas Carnaby Evo",
    "inStock": 11,
    "basePrice": 150000,
    "brand": "6601cce9565c1c07f6aa3a3f",
    "__v": 0
  },
  .....
 ]
```

### Ruta  ```/price/{user_id}/{nombre_producto}```

Esta ruta devuelve el precio especial para el cliente y la marca especificados, si está disponible. Si el cliente **NO** tiene un precio especial para la marca, la ruta devuelve el precio base del producto.

#### Ejemplo de solicitud:
```sh
GET /price/1234567890/Zapatillas%20Nike%20Air%20Max%2090 HTTP/1.1
HEADER X-TENANT-ID : drenvio
Host: localhost:3000
```
#### Ejemplo de respuesta exitosa:

```sh
{
  "finalPrice": 140000,
  "customer": {
    "_id": "6601cdf8bdd02d6f8b0d2999",
    "name": "Juan Pérez",
    "identification": 1234567890,
    "__v": 0
  },
  "brand": {
    "_id": "6601cce9565c1c07f6aa3a3b",
    "name": "adidas",
    "__v": 0
  }
}
```

## Imagenes de muestra

![Logo personal](https://i.ibb.co/rQJ08sx/imagen-2024-03-25-204629312.png)


## Authors

- [@DanielRamos](https://www.github.com/ramos29pages)
![Logo personal](https://i.ibb.co/W0g3jsk/logo.png)