# Usar una imagen base de Node.js
FROM node:18 AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:18 AS dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
