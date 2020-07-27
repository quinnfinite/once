var express = require('express');
var router = express.Router();
var { driver, session } = require('../database/neo4j.js')

module.exports = router;

router.post('/author', async (req, res) => {
  const {author, text} = req.body;
  res.send('writing')
})

router.get('/all', async (req, res) => {
  const ses = await session();
  ses.run('MATCH (p:Post) RETURN p')
  .then(({records}) => {
    res.send(records)
  })
  .catch(err => res.send(err))
  .then(() => ses.close())
})