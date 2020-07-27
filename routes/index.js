var root = require('./root');
var user = require('./user');
var post = require('./post')

module.exports =  app => {
  app.use('/', root)
  app.use('/user', user)
  app.use('/post', post)
}
