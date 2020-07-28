const faker = require('faker')
var {session } = require('../database/neo4j.js')

  for (var i = 0; i < 10; i++) {
   (async ()=>{
    const ses = await session('WRITE');
    const username = faker.internet.userName()
    ses.run('CREATE (u:User { username: $username }) RETURN u', { username: username })
    .then(async (result) => {
      //find all nodes that aren't being followed by the user - overkill, but fun to do.

      var data = await ses.run('MATCH (a:User) WHERE NOT (:User {username: $username})-[:Follows]->(a) RETURN a', {username: username});
      var {records} = data
      var rando = Math.floor(Math.random()* records.length)
      var follow = records[rando]._fields[0].properties.username
      //console.log('Records - ', )

      await ses.run('MATCH (u:User) WHERE u.username=$username MATCH (f:User) WHERE f.username=$follow CREATE (u)-[:Follows]->(f) RETURN f', {
        username: username, follow: follow}).then(() => ses.close())
    })
    .catch(err => console.log(err))
   })()
  }
