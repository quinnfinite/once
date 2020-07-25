var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', (req, res)=> {
  res.sendFile('index')
});


router.get('/:id', (req, res)=> {
  const {id} = req.params;
  res.send(`Number: ${id}`);
})