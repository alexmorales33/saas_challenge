
## Start

Para correr el proyecto se debe tener instalado Node.js (v20.15.0) y npm. Luego, se debe clonar el repositorio, instalar las dependencias, agregar un archivo .env basado .env.template y correr

```bash
npm  run  dev
```

---

## Challenge 2 

El objetivo de este challenge es crear una aplicación web en [Next.js](https://nextjs.org/docs) que permita visualizar un feed de posts. Estos post serán post reales de redes sociales de marcas de belleza.

Para lograrlo se deberán consumir una mock api ([Mini Feed API](#mini-feed-api)).

Parte de la aplicación está resuelta, pero te encontrarás con métodos incompletos, llamadas incorrectas, tipos faltantes, etc.

Hay comentarios en el figma que te ayudarán a entender mejor la aplicación [Figma Link - Challenge 2](https://www.figma.com/design/r2r6uDG3kmYn34ctRdO50w/Challenge-Eyecue-SaaS---2024?node-id=496-317&t=PwUbgDpPu5V2ZbkI-4).

---

## Objetivos

To do:
- La aplicación deberá tener un selector de cuentas de belleza.
- Debe mostrar un listado de posts de **UNA** cuenta de belleza al mismo tiempo.
- Cada post debe mostrar la información de la publicación y sus métricas (como muestra el Figma)
- Los servicios de la app (api/services) deben responder la información necesaria para la vista.
- El Figma es orientativo, no es necesario que la maquetación sea exacta.

To don't:
- No es necesario que la aplicación sea responsive o accesible.
- No se deben utilizar librerías de componentes (como Bootstrap, Material UI, Chakra, shadcn, etc).

---

## Estructura de la aplicación

La estructura del proyecto está definida, pero puedes modificarla si lo consideras necesario. Con excepción de la carpeta **pages** (/pages) que contiene las rutas de la aplicación y debería funcionar sin necesidad de modificarla.

La carpeta **src** contiene:
- `/components` - Componentes reutilizables.
- `/controllers` - Se encarga de hacer los request al servidor local (/api/services, a través de /pages).
- `/styles` - Estilos globales de la aplicación.
- `/views` - Contiene las vistas de la aplicación.

La carpeta **api** contiene:
- `/clients` - Se encarga de consumir Mini Feed API.
- `/services` - Llama a los `clients` y procesa la información antes de devolverla al cliente (front).

La carpeta **config** contiene:
- `env.ts` - Archivo de configuración de variable de entorno (se prooverán las variables necesarias para poner en .env).
  
---

## Mini Feed API

##### /accounts.json

Devuelve un listado de las accounts de belleza a utilizar en el challenge.

##### /posts/{{account}}.json

Devuelve un listado de posts (con información general de los mismos) de una cuenta.
Recibe en su ruta el nombre de la cuenta.

##### /posts/metrics/{{metrica}}/{{account}}.json

Devuelve un listado de posts (con la métrica solicitada) de una cuenta. Recibe en su ruta el nombre de la cuenta y la métrica a mostrar.
Las métricas disponibles son:

- `engagement`
- `view-engagement`

---

Si tenés alguna duda, no dudes en preguntar.
¡Buena suerte!

![](https://i.pinimg.com/236x/0f/1d/a2/0f1da22f229624063581fb83df0b2e12.jpg)