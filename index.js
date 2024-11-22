const express = require("express");
const { runRemoteTests } = require('./test');
const app = express();
const PORT = 3000; // Cambia el puerto si lo prefieres

// Ruta principal
app.get("/", async (req, res) => {
  try {
    const result = await runRemoteTests(); // Llamar a la función exportada
    res.json({
      message: "¡Hola desde Hackerrank Sandbox! Tu servidor está funcionando.",
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al ejecutar pruebas",
      success: false,
      error: error.message,
    });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
