# Usar una imagen base de Node.js
FROM node:18

# Crear un directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json primero
COPY package.json ./

# Instalar las dependencias
RUN if [ -f package.json ]; then npm install; fi

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto 3000
EXPOSE 3000

# Establecer el comando predeterminado
CMD ["npm", "start"]
