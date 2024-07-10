require('dotenv').config();
const express = require('express');
const path = require('path');
const dogRoutes = require('./routes/dogRoutes');

const app = express();

// Middleware para parsear el cuerpo de las solicitudes POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Dog Microservice is running");
});

app.use('/api/dogs', dogRoutes);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});