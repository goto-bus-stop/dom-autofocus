var test = require('tape')
var html = require('nanohtml')
var autofocus = require('../')

test('noops', function (t) {
  t.plan(1)
  var input = html`
    <input type="text">
  `
  var result = autofocus(input)
  t.equal(result, input)
})
