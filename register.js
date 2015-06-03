var fails = []
var tests = {}
var start = null
var isTAP = require('./lib/is-tap-string')
var pad = require('pad-right')
var previousLog = ''

var parser = require('tap-console-parser')()
.on('complete', function (output) {
  var time = Date.now() - start
  parser.detach()
  console.log('\n')

  if (!output.ok) {
    console.log('%c\nFailing Tests: ' + output.fail, 'font-weight: bold')
    Object.keys(tests).forEach(function (key) {
      var test = tests[key]
      var asserts = fails[key] || []
      if (asserts.length === 0)
        return

      console.log('%c  ' + test.name, 'color: gray')

      asserts.forEach(function (fail) {
        console.log('%c     ⨯ ' + fail.name, 'font-weight: bold; color: #c32b2b')

        console.log('%c     ---', '')
        var str = fail.error.raw
            .split('\n')
            .map(function (x) {
              return '   ' + x
            })
            .join('\n')

        console.log(str)
        console.log('%c     ...', '')
      })
    })
    console.log('')
  }

  if (output.ok) {
    console.log('%c✓ ok', 'color: white; padding: 1px 10px; background: #8eca6c; font-weight: bold')
  } else {
    console.log('%c⨯ not ok', 'color: white; padding: 1px 10px; background: #c32b2b; font-weight: not ok')
  }
  if (!output.ok) {
    console.log('%c  total:    ' + output.total, 'font-weight: bold')
  }
  console.log('%c  passing:  ' + output.pass, 'color: #72b432; font-weight: bold')
  if (!output.ok) {
    console.log('%c  failing:  ' + output.fail, 'color: #c32b2b; font-weight: bold')
  }
  console.log('%c  duration: ' + time + ' ms', 'color: gray')

  start = null
})
.on('assert', function (assert) {
  if (assert.ok) {
    parser.log('%c   ✓', 'color: #8eca6c', assert.name)
  } else {
    if (fails[assert.test])
      fails[assert.test].push(assert)
    else
      fails[assert.test] = [ assert ]

    parser.log('%c   ⨯ ' + assert.name, 'color: #c32b2b; font-weight: bold')
  }
})
.on('test', function (test) {
  if (start === null)
    start = Date.now()
  else
    parser.log('')
  parser.log('%c' + test.name, 'color: gray')
  tests[test.number] = test
})
.on('log', function (args) {
  // allow comments to print as per normal
  var str = args.join(' ')
  if (str && !isTAP(str)) {
    if (!previousLog || !/^\s*(expected|actual|at)\:\s*$/.test(previousLog)) {
      parser.log.apply(null, args)
    }
  }
  previousLog = str
})