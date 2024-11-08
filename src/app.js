const express = require('express');
const app = express();
const PORT = 3000;

// Importar el controlador de fraude
const { verificarFraude } = require('./controllers/fraudeController');


// Endpoint GET para obtener ventas de un usuario específico
app.get('/api/v1/orders/:user_id', (req, res) => {
  const userId = req.params.user_id;

const ventas = [
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 1,
    fecha: '2024-11-08'
  },
  {
    id: 2,
    fecha: '2024-11-10'
  },
  {
    id: 2,
    fecha: '2024-11-10'
  },
    {
    id: 3,
    fecha: '2024-11-05'
  }
  ];


  ventasUsuario = ventas.filter((venta) => venta.id === userId);
  res.status(200).json(ventasUsuario);
});

// Endpoint GET para verificar fraude de un usuario específico
app.get('/api/v1/validate/:user_id', verificarFraude);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Microservicio de ventas y detección de fraude en el puerto ${PORT}`);
});
