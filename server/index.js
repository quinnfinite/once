require('dotenv').config()
var express = require('express');
var app = express();
const path = require('path');
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))

const mountRoutes = require('../routes');
mountRoutes(app);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening at http://localhost:${4000}`)
})