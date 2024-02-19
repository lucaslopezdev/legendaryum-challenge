<a name="readme-top"></a>

## Legendaryum Challenge

### Desarrollado con

* [![Vue][Vue.js]][Vue-url]
* [![Node][Node]][Node-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Vite][Vite]][Vite-url]

## Inicio rápido

Para obtener una copia local del proyecto siga los siguientes pasos

### Prerequisitos

Vas a necesitar instalar las siguientes dependencias en tu máquina
*  Node 20 LTS

### Instalación Frontend

1. Clonar el repositorio en la carpeta deseada
```
git clone https://github.com/lucaslopezdev/legendaryum-challenge
```

2. Pararse en el root del proyecto
```
cd legendaryum-challenge/client
```

3. Instalar las dependencias de node
```
npm install
```

4. Montar el proyecto web en local ejecutando
```
npm run dev
```

### Instalación Backend

1. Pararse en el root del proyecto
```
cd legendaryum-challenge/server
```

2. Instalar las dependencias de node
```
npm install
```

3. Montar el servidor en local ejecutando
```
npm run dev
```

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>

## Decisiones de diseño

Decidí usar un diseño minimalista y moderno, con una vista en modo oscuro y componentes discretos reutilizando ciertas clases para no sobrecargar de código en linea mis componentes.

## Documentación

Creé tres endpoints principales en el backend y en el frontend dediqué un archivo para establecer la ruta main para las peticiones y luego en distintos servicios hago las peticiones personalizadas.

api/server.api.ts
```javascript
import axios from 'axios'

const serverApi = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export default serverApi
```
services/view.service.ts
```javascript
import serverApi from "@/api/server.api";

const viewService = {
  getViews () {
    return serverApi.get('/views')
  },

  getView (viewRoute: string) {
    return serverApi.get(`/views/${viewRoute}`);
  }
}

export default viewService;
```
Luego creé tres componentes (vistas, categorias y productos) donde dinámicamente reciben información y se actualizan según la ruta, que tambien es dinámica.

Para hacer los llamados al back solo me bastó de un composable para traer y almacenar la información en distintos stores.

Si bien pude reutilizar aún más varios componentes, decidí estructurarlo asi para una posible expansión y modificación a futuro.

## Importante

Al entrar a una view cargarán todos los productos debajo de las categorias, si desea filtrar por categoría solo haga click encima de ella y si luego quiere volver a ver todos los productos haga click en el componente superior.

<p align="right">(<a href="#readme-top">Volver al inicio</a>)</p>

[Vue.js]: https://img.shields.io/badge/Vue-3-42b883?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Node]: https://img.shields.io/badge/Node-20-026e00?style=for-the-badge&logo=nodedotjs&logoColor=026e00
[Node-url]: https://nodejs.org/en
[Tailwind]: https://img.shields.io/badge/Tailwind-3-1976d2?style=for-the-badge&logo=tailwindcss
[Tailwind-url]: https://tailwindcss.com/
[Vite]: https://img.shields.io/badge/Vite-yellow?style=for-the-badge&logo=vite
[Vite-url]: https://vitejs.dev/