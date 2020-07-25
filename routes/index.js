var root = require('./root')

module.exports =  app => {
  app.use('/', root)
}
