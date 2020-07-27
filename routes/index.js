var root = require('./root')
var user = require('./user')

module.exports =  app => {
  app.use('/', root)
  app.use('/user', user)
}
