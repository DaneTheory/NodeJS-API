const micro = require('micro')

module.exports = micro((req, res) => {
  return 'NodeJS.org API'
})
