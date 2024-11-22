# Usar una imagen base de Node.js
FROM node:18

# Crear un directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json primero (asegúrate de que exista)
COPY package.json ./

# Instalar las dependencias
RUN if [ -f package.json ]; then npm install; fi

# Copiar el resto de los archivos
COPY . .

# Establecer el comando predeterminado
CMD ["node", "index.js"]
