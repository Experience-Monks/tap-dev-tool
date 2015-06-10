require('../register')()

var test = require('tape')

test('should test things', function (t) {
  t.plan(4)
  t.deepEqual([ 2, 3 ], [ 2, 3 ])
  setTimeout(function() {
    t.deepEqual(5, 5)
  }, 1000)
  t.equal('hello', 'hello')
  t.throws(function () {
    throw new Error("FOO")
  }, 'yep it throws')
})

test('even more testing of things', function (t) {
  t.ok(true, 'this is ok')
  t.end()
})

