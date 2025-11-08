// Importaciones básicas
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Conexión a la BD
const pool = require('./src/config/db');

pool.connect()
  .then(() => console.log("BD conectada correctamente"))
  .catch(err => console.error("Error al conectar BD", err));

// Rutas
const userRoutes = require('./src/routes/user.routes');

// Registrar rutas
app.use('/usuarios', userRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

// Configuración del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
