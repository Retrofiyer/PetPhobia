require('dotenv').config();
const express = require('express');
const path = require('path');
const catRoutes = require('./routes/catRoutes');

const app = express();

// Middleware para parsear el cuerpo de las solicitudes POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Cat Microservice is running");
});

app.use('/api/cats', catRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});