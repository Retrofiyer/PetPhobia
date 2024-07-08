require('dotenv').config();
const express = require('express');
const path = require('path');
const catRoutes = require('./routes/catRoutes');
const dogRoutes = require('./routes/dogRoutes');

const app = express();

// Middleware para parsear el cuerpo de las solicitudes POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas para APIs
app.use('/api/cats', catRoutes);
app.use('/api/dogs', dogRoutes);

// Ruta para servir el archivo login.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'login.html'));
});

// Ruta para procesar el formulario de inicio de sesión
app.post('/login', (req, res) => {
  const { firstName, lastName, age } = req.body;
  // Redirigir a la página principal con el nombre de usuario
  res.redirect(`/welcome?name=${firstName} ${lastName}`);
});

// Ruta para servir el archivo index.html
app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'));
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});