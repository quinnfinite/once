var express = require('express');
var router = express.Router();
var { driver, session } = require('../database/neo4j.js')

module.exports = router;

//Creates a user - username must be supplied in the body of the request
router.post('/create', async (req, res) => {
  const { username } = req.body;
  const ses = await session('WRITE');
  ses.run('CREATE (u:User {username: $username}) RETURN u', {username: username})
  .then(result => {
    var user = result.records[0]._fields[0].properties.username
    res.send(`User created with username ${user}`);
  })
  .catch(err => {
    res.send(`${username} is already taken. Try a different username`)
  })
  .then(() => ses.close())
});

//Retrieve All Users
router.get('/all', async (req, res)=> {
  const ses = await session();
  ses.run('MATCH (u:User) RETURN u')
  .then(({records}) => {
    res.send(records);
  })
  .catch(err => res.send(err))
});