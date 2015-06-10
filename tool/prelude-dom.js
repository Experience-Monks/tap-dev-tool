require('domready')(function () {
  document.body.style.background = 'yellow'
})
require('../register')().on('complete', function (result) {
  document.body.style.background = result.ok ? 'green' : 'red'
})
