const fs = require('fs')
const path = require('path')

module.exports = (req, res) => {
  return res.send(fs.readFileSync(path.join( __dirname, '../.version')).toString())
}
