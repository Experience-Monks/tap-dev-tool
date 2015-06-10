var through = require('through2')
var fs = require('fs')
var path = require('path')

module.exports = function errorify (b, opt) {
  var build = path.join(__dirname, 'dist', 'build.js')
  if (opt && (opt.b || opt.background)) {
    build = path.join(__dirname, 'dist', 'build-dom.js')
  }

  var prelude = fs.readFileSync(build)

  var written = false
  var bundle = b.bundle.bind(b)
  b.bundle = function (cb) {
    written = false

    var output = through(write)
    var pipeline = bundle(cb)
    pipeline.pipe(output)
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
}
