var express = require('express')
var router = express.Router()

module.exports = router;

router.get('/', (req, res)=> {
  res.send('I am the root of all things')
})