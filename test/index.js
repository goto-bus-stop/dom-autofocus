var test = require('tape')
var empty = require('empty-element')
var html = require('nanohtml')
var autofocus = require('../')

test('autofocuses', function (t) {
  t.plan(1)
  empty(document.body)
  var wrapper = html`<div></div>`
  document.body.appendChild(wrapper)

  var input = html`
    <input type="text">
  `
  wrapper.appendChild(autofocus(input))

  setTimeout(function () {
    t.equal(document.activeElement, input)
  }, 0)
})
