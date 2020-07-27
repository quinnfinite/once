var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/create', (req, res) => {
  res.send('Creating User')
});