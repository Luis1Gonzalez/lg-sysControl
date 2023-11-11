
# LG-SYSCONTROL

LG-SYSCONTROL es una herramienta creada para llevar el control de producción de una empresaque elabora puertas corta fuego.

Para esta app que sera responsive para que pueda ser usada tanto en escritorio como en moviles, se usara el stack next.js incorporando prisma como ORM y base de datos mysql.

## La programacion sera la siguiente:

1. La aplicación se desarrollara en next.js en su version 12, por lo que se uso el siguiente codigo en consola:

`npx create-next-app@12`

### Tailwindcss

2. A la app se le dará estilos con taiwindcss y lo instalaremos en consola con la siguiente linea de codigo:

`npm i -D tailwindcss postcss autoprefixer`

3. Luego iniciamos tailwindcss y con ello se nos crearán los archivos de configuración:

`npx tailwindcss init -p`

4. En el archivotailwind.config.js sustituiremos por esto:

~~~~
module.exports = {
 content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
    extend: {},
  },
  plugins: [],
};
~~~~

5. Eliminamos el archivo Home.module.css y su importación en el index.js

6. En el archivo global.css sustituiremos todo el contenido por el siguiente:

~~~
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~

### Base de Datos

En este proyecto trabajaremos con una base de datos mysql para crearla ingresaremos el siguiente codigo en la consola: 
`mysql -u root`

Esto nos dara acceso a crear la base de datos, le daremos un nombre y el resto del trabajo se hara con prisma.

para levantar el servidor estoy trabajando con XAMP y hay que activar "mysql".

### Prisma

Instalaremos prisma que sera el OMR que usaremos para facilitarnos el trabajo con la base de datos.

1. Instalamos prisma con la siguiente linea de codigo en la consola:

`npm i -D prisma`

2. Luego ingresamos `npx prisma init` en consola para iniciar prisma. y veremos que se nos crea el archivo .env y la carpeta prisma con el archivo schema.prisma.

3. En el archivo schema.prisma modificaremos el proveedor de base de datos como muestro abajo:


~~~
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
~~~

4. Modificamos la url inicial en el archivo schema.prisma, sustituyendo los valores de ejemplo por los de la base de datos, asi:

Original: `DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`

Modificado: `DATABASE_URL="mysql://root:@localhost:3306/lgsyscontrol"`

5. En el archivo schema.prisma creamos los modelos.


### Consultar la base de datos

La consulta a la base de datos debe ser en el lado del servidor no en el cliente.

seguir los siguientes pasos:

1. en el index.js se debe importar PrismaClient

`import { PrismaClient } from '@prisma/client'`

2. Tenemos dos opciones por el momento para acceder a los datos de nuestra base de datos, el primeros es "getServerSideProps" y el segundo que es el que usaremos es "staticsProps"

3. Para esto iremos a la carpeta api y alli renombraremos el archivo hello.js en este caso a clientes.js 

3.1. En este archivo importaremos el PrismaClient y alli mismo lo instanciaremos.

3.2. Con este codigo `const clientes = await prisma.cliente.findMany()` traeremos los datos de la base de datos y lo retornamos en el json

3.3. para poder ver el resultado en el navegador tendremos que sumar a nuestro a la url, en este caso "http://localhost:3000/api/clientes"

### Modal

Para facilitar la creacion de ventanas modales en este proyecto use Headless UI que es una opción a Bootstrap y material UI.

Lo que se necesita se puede conseguir en su pagina web : https://headlessui.com/

y para su instalación ingresamos en consola el siguente codigo:
`npm install @headlessui/react`