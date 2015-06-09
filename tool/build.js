var fs = require('fs')
var path = require('path')

var file = path.resolve(__dirname, '../', 'dist', 'build.js')
fs.readFile(file, 'utf8', function (err, data) {
  if (err) throw err
  data = data.replace(/[\n\r]/g, '')
  fs.writeFile(file, data, function(err) {
    if (err)
      throw err
  })
})