var neo4j = require('neo4j-driver');
require('dotenv').config()

var driver = neo4j.driver(
  'neo4j://localhost:11003',
  neo4j.auth.basic(process.env.NEO_USER, process.env.NEO_PW)
);

(async() => {
  try {
      await driver.verifyConnectivity()
      console.log('Driver created')
    } catch (error) {
      console.log(`connectivity verification failed. ${error}`)
    }
})()

var session = driver.session({
  database: 'neo4j',
  defaultAccessMode: neo4j.session.READ
});

session.run('MATCH (u:Post) RETURN u')
.then(result => console.log(result.records[0]._fields[0].properties))
.catch(err => console.log('ERROR - ', err)).then(() => driver.close())