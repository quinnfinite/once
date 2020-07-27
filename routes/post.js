var express = require('express');
var router = express.Router();
var { driver, session } = require('../database/neo4j.js')

module.exports = router;

router.post('/create', async (req, res) => {
  const {username, text} = req.body;
  const ses = await session('WRITE');
  ses.run('MATCH (u:User) WHERE u.username=$author CREATE (u)-[:Wrote]->(p:Post {author: $author, text: $text}) RETURN p', {author: username, text: text})
  .then(({records}) => {
    res.send(records)
  })
  .catch(err => res.send(err))
  .then(() => ses.close())
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

router.get('/mine', async (req, res) => {
  const { username } = req.body;
  const ses = await session();
  ses.run('MATCH (u:User)-[:Wrote]->(p:Post) WHERE u.username=$username RETURN p', {username: username})
  .then(({records}) => {
    res.send(records)
  })
  .catch(err => res.send(err))
  .then(() => ses.close())
})