const micro = require('micro')

module.exports = micro((req, res) => {
  return 'NodeJS-API-Rev.1'
})
