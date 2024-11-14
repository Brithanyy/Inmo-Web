
# Inmo-Web

Inmo-Web es una aplicación web de bienes raíces desarrollada con Angular, TypeScript y JSON-Server que ofrece una experiencia interactiva y moderna para explorar, gestionar y reseñar propiedades.

Características: La aplicación está dividida en dos tipos de dominios

Dominios Públicos: Los usuarios pueden acceder sin necesidad de autenticación a las siguientes páginas:

Home: Página principal con una introducción a los servicios ofrecidos.

Propiedades: Listado de propiedades disponibles, con opción de aplicar filtros por tipo de propiedad.

Contacto: Página de contacto que permite a los visitantes comunicarse con nosotros de forma sencilla.

Sobre Nosotros: Información sobre la empresa y su misión en el mercado inmobiliario.

Detalles de Propiedad: Vista detallada de cada propiedad, donde se incluye información completa sobre la propiedad seleccionada. También cuenta con la funcionalidad de agregar reseñas, lo que permite a los usuarios compartir sus opiniones sobre propiedades específicas.

Dominios Privados: Los dominios privados están disponibles solo para usuarios autenticados (a quienes se les proporciona un usuario para iniciar sesión). Una vez logueados, los usuarios pueden acceder a las siguientes funcionalidades adicionales:

Modificar y Eliminar Propiedades: Permite la gestión completa de las propiedades listadas en la plataforma.

Eliminar Reseñas: Permite eliminar reseñas que se hayan agregado a una propiedad específica.

Nota: Aunque las rutas en Inmo-Web no están protegidas formalmente, si el usuario intenta acceder a dominios privados sin estar autenticado, se mostrará una alerta de "Acceso denegado" y será redirigido automáticamente a la página de inicio.

## Authors

[@Brithanyy](https://github.com/Brithanyy) - Brisa Ortiz

[@Rouse02](https://github.com/Rouse02) - Rocio Ortiz

## Link a GitHub (Repositorio)

(https://github.com/Brithanyy/Inmo-Web)

## Installation

Install my-project with npm

```bash
  npm i
  
```
```bash
  json-server --watch src\app\DataBase\dataBase.json
  
```
  Para iniciar sesión debe hacer lo siguiente:

  --  Ruta /login (Aquí debe iniciar sesión con el siguiente usuario. Username: UserAdmin Password: passwordUserAdmin2024).

    