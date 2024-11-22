´´´
{
  "name": "hackerrank-sandbox",
  "version": "1.0.0",
  "description": "Entorno local para pruebas de ejercicios Hackerrank",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "node index.js" // Cambia a ts-node si usas TypeScript
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.0.0", // Solo si usas TypeScript
    "@types/node": "^18.0.0" // Solo para TypeScript
  }
}
´´´

´´´
version: '3.8'
services:
  hackerrank:
    build: .
    volumes:
      - .:/app
    working_dir: /app
    command: ["npm", "start"] # Cambia a ts-node para TypeScript
    command: ["npx", "ts-node", "index.ts"]
´´´