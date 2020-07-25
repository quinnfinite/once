require('dotenv').config()
var express = require('express');
var app = express();
const path = require('path');
const mountRoutes = require('../routes');
mountRoutes(app);


app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening at http://localhost:${4000}`)
})