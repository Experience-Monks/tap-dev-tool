require('../register')

var test = require('tape')

console.log("This is a regular comment", { foo: 2 })

test('should test things', function (t) {
  t.plan(4)
  t.deepEqual([ 2, 3 ], [ 2, 3 ])
  t.deepEqual(2, 5)
  t.equal('hello', 5)
  t.throws(function () {
    throw new Error("FOO")
  }, 'yep it throws')
})

test('even more testing of things', function (t) {
  t.ok(false, 'this is not ok')
  t.end()
})