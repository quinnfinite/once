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
  .then(() => ses.close())
});

router.get('/followers', async (req, res) => {
  const { username } = req.body;
  const ses = await session();
  ses.run('MATCH (u)-[:Follows]->(m:User) WHERE m.username=$username RETURN u', {username: username})
  .then(({records})=>{
    res.send(records)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
  .then(() => ses.close())
});

router.get('/following', async (req, res) => {
  const {username} = req.body;
  const ses = await session();
  ses.run('MATCH (u:User)-[:Follows]->(p) WHERE u.username=$username RETURN p', {username: username})
  .then(({records}) => {
    res.send(records)
  })
  .catch((err) => {
    console.log('Error - ', err)
    res.send(err)
  })
  .then(() => ses.close())
});

router.post('/follow', async (req, res) => {
  const { username, follow} = req.body;
  console.log(req.body)
  const ses = await session('WRITE');
  ses.run('MATCH (u:User) WHERE u.username=$username MATCH (f:User) WHERE f.username=$follow CREATE (u)-[:Follows]->(f) RETURN f', {
    username: username, follow: follow
  })
  .then(({records})=> {
    const followed = records[0]._fields[0].properties.username
    res.send(`${username} followed ${followed}`)
  })
  .catch((err) => {
    console.log('Error - ', err);
    res.send(err)
  })
  .then(() => ses.close())
});

router.delete('/unfollow', async (req, res) => {
  const { username, follow }  = req.body;
  const ses = await session('WRITE');
  ses.run('MATCH (u:User)-[d:Follows]->(f:User) WHERE u.username=$username AND f.username=$follow DELETE d', {
    username: username, follow: follow
  })
  .then(() => {
    res.send(`${username} has unfollowed ${follow}`)
  })
  .catch((err) => {
    console.log('Error - ', err);
    res.send(err)
  })
  .then(() => ses.close())
});

//shows mutual follows
router.post('/mutual-follows', async (req, res) => {
  const {username, follow} = req.body;
  const ses = await session();
  ses.run('MATCH (u:User)-[:Follows]->(a)<-[:Follows]-(f:User) WHERE u.username=$username AND f.username=$follow RETURN a', {username: username, follow: follow})
  .then(({records}) => {
    res.send(records)
  })
  .catch((err) => {
    console.log('Error - ', err);
    res.send(err)
  })
  .then(() => ses.close())
});

//shows mutual followers
router.post('/mutual-followers', async (req, res) => {
  const {username, follow} = req.body;
  const ses = await session();
  ses.run('MATCH (u:User)<-[:Follows]-(a)-[:Follows]->(f:User) WHERE u.username=$username AND f.username=$follow RETURN a', {username: username, follow: follow})
  .then(({records}) => {
    res.send(records)
  })
  .catch((err) => {
    console.log('Error - ', err);
    res.send(err)
  })
  .then(() => ses.close())
});

//suggested follows
router.get('/suggested/:username', async (req, res) => {
  const { username } = req.params;
  const ses = await session();
  ses.run('MATCH (u:User)-[:Follows]->(a)-[:Follows]->(f) WHERE u.username=$username AND NOT exists((u:User)-[:Follows]->(f)) RETURN DISTINCT f,a', {username: username})
  .then(({records}) => {
    res.send(records)
  })
  .catch((err) => {
    console.log('Error - ', err);
    res.send(err)
  })
  .then(() => ses.close())
});




