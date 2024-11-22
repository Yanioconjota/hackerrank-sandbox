// Instalar Express (esto lo puedes añadir con npm install express)
const express = require("express");
const app = express();
const PORT = 3000; // Cambia el puerto si lo prefieres

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Hola desde Hackerrank Sandbox! Tu servidor está funcionando.");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
