
# Docker JS Runner

Este proyecto permite ejecutar y depurar código JavaScript en un archivo `index.js` desde el navegador. Cada cambio en el archivo se refleja automáticamente, mostrando los resultados en la consola del navegador.

## Requisitos Previos

Asegúrate de tener instalados:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Estructura del Proyecto

```
project/
│
├── Dockerfile          # Archivo para construir la imagen Docker
├── docker-compose.yml  # Configuración del servicio Docker Compose
├── index.js             # Archivo JS donde se escribe el código
├── package.json        # Dependencias del proyecto
└── src/
    └── server.js       # Servidor Express que ejecuta index.js
```

---

## Instalación

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/Yanioconjota/hackerrank-sandbox.git
   cd hackerrank-sandbox
   ```

2. **Construye y levanta el contenedor con Docker Compose**:
   ```bash
   docker-compose up --build
   ```

   Esto construirá la imagen, instalará las dependencias y levantará el servidor.

---

## Uso

1. Abre tu navegador y visita: [http://localhost:3000](http://localhost:3000)
2. Edita el archivo `index.js` con el código JavaScript que deseas ejecutar. Por ejemplo:

   ```javascript
   function checkForDupes(arr) {
       const seen = new Map();
       for (let num of arr) {
           if (seen.has(num)) {
               return true; // Encontramos un duplicado
           }
           seen.set(num, true);
       }
       return false; // No hay duplicados
   }

   const arr = [1, 2, 3, 4, 5];
   console.log(checkForDupes(arr)); // Resultado: false
   ```

3. Guarda el archivo y recarga el navegador para ver los cambios reflejados.

---

## Detener el Proyecto

Para detener los contenedores y limpiar los recursos, ejecuta:

```bash
docker-compose down
```

---

## Notas Técnicas

- **Recarga automática**: El proyecto usa `nodemon` para reiniciar el servidor cada vez que detecta cambios en el archivo `index.js`.
- **Montaje de volúmenes**: El directorio local está montado en el contenedor para reflejar los cambios en tiempo real.
- **Puerto expuesto**: El servidor corre en el puerto `3000` del host.

---

## Solución de Problemas

- **`nodemon: not found`**:
  Si ves este error, asegúrate de que las dependencias de desarrollo están instaladas en el contenedor. Reconstruye la imagen usando:
  ```bash
  docker-compose up --build
  ```

- **Cambios no reflejados**:
  Asegúrate de haber guardado el archivo `index.js`. Si el problema persiste, verifica que el volumen esté correctamente montado.
