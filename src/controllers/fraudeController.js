const axios = require('axios');

// Función para detectar fraude basado en el número de órdenes en una misma fecha por usuario
const detectarFraudePorFecha = (ventas) => {
  const conteoPorFecha = {};

  for (let venta of ventas) {
    const userId = venta.id;
    const fecha = venta.fecha;

    // Inicializa el objeto si no existe
    if (!conteoPorFecha[userId]) {
      conteoPorFecha[userId] = {};
    }
    if (!conteoPorFecha[userId][fecha]) {
      conteoPorFecha[userId][fecha] = 0;
    }

    // Aumenta el contador de órdenes para el usuario en esa fecha
    conteoPorFecha[userId][fecha] += 1;

    // Verificar si supera el límite de 10 órdenes en una misma fecha
    if (conteoPorFecha[userId][fecha] > 10) {
      return true; // Detecta fraude
    }
  }

  return false; // No se detectó fraude
};

// Controlador para verificar fraude
const verificarFraude = async (req, res) => {
  try {
    const { user_id } = req.params.user_id;; // Obtener user_id desde los parámetros de la solicitud
    // Obtener ventas desde el endpoint de ventas
    const response = await axios.get('https://fraudeapi01-braxdrdjc4f4c2hr.centralus-01.azurewebsites.net/api/v1/orders/${user_id}'); 
// Llamada al microservicio de ventas
    const ventas = response.data;

    // Aplicar el algoritmo de detección de fraude
    const esFraude = detectarFraudePorFecha(ventas);

    res.status(200).json({ is_fraud: esFraude });
  } catch (error) {
    console.error('Error al obtener ventas:', error);
    res.status(500).send('Error al verificar fraude');
  }
};

module.exports = { verificarFraude };
