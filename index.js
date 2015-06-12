var through = require('through2')
var fs = require('fs')
var path = require('path')

var build = path.join(__dirname, 'dist', 'build.js')
var prelude = fs.readFileSync(build)

module.exports = function errorify (b) {
  var written = false
  var bundle = b.bundle.bind(b)
  b.bundle = function (cb) {
    written = false

    var output = through(write)
    var pipeline = bundle(cb)
    pipeline.pipe(output)
    pipeline.once('error', function (err) {
      console.error('error: %s', err)
      var result = errMessage(err)
      output.push('!console.error(' + JSON.stringify(result) + ');')
      output.push(null)
      pipeline.unpipe(output)
      pipeline.on('error', function (err2) {
        // module-deps likes to emit each error
        console.error('error: %s', err2)
      })
    })
    return output
  }

  function write (buf, enc, next) {
    if (!written) {
      this.push(prelude)
      written = true
    }
    this.push(buf)
    next()
  }

  function errMessage (err) {
    if (err.codeFrame) { // babelify@6.x
      return [err.message, err.codeFrame].join('\n\n')
    } else { // babelify@5.x and browserify
      return err.annotated || err.message
    }
  }
}
