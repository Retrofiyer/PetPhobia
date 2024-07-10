require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo login.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'login.html'));
});

// Ruta para servir el archivo index.html
app.get('/welcome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

// Rutas para manejar solicitudes de gatos y perros
app.use('/api/cats', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/cats`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cat images' });
  }
});

app.use('/api/dogs', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:3002/api/dogs`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dog images' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const response = await axios.post(`http://localhost:3003/login`, req.body);
    // Extracting the necessary data from the response
    const redirectUrl = response.data.redirectUrl;
    res.redirect(redirectUrl);
  } catch (error) {
    console.error('Error processing login:', error);
    res.status(500).json({ message: 'Error processing login' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});