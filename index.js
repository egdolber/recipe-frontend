// external modules
const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const { fileURLToPath } = require('url');
const colors = require('colors');

console.log(`============= Client Interface ++==================`.white);
console.log(`Project Name: ${process.env.PROJECT}`.blue);
const port = process.env.PORT || 3001;

// app varialbes
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes definitions
app.get('/', (req, res) => {
  res.render('index', { Title: 'Hello World!' });
});

// server activation
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`.blue);
});
