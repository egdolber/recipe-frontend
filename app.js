const express = require('express');
const dotenv = require('dotenv').config();
const { dirname, join } = require('path');
const { fileURLToPath } = require('url');
const colors = require('colors');

console.log(`============= Client Interface ++==================`.white);
console.log(`Project Name: ${process.env.PROJECT}`.blue);
const port = process.env.PORT || 3001;

const app = express();

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`.blue);
});
