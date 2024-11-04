const express = require('express');
const app = express();
const PORT = 3000;

// Importar el controlador de fraude
const { verificarFraude } = require('./controllers/fraudeController');


// Endpoint GET para obtener ventas de un usuario específico
app.get('/api/v1/orders/:user_id', (req, res) => {
  const userId = req.params.user_id;
  const ventasUsuario = ventas.filter((venta) => venta.id === userId);
  res.status(200).json(ventasUsuario);
});

// Endpoint GET para verificar fraude de un usuario específico
app.get('/api/v1/validate/:user_id', verificarFraude);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Microservicio de ventas y detección de fraude en el puerto ${PORT}`);
});
