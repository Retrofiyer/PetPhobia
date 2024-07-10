require('dotenv').config();
const express = require('express');
const path = require('path');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'views', 'login.html'));
});

app.use('/login', loginRoutes);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Login Microservice is running on port ${port}`);
});