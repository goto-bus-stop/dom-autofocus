var onload = require('on-load')

module.exports = function autofocus (el, id) {
  if (typeof el !== 'object' || !el || !el.focus) {
    throw new TypeError('dom-autofocus: el should be a DOM element')
  }

  if (!id) id = ''

  return onload(el, function () {
    el.focus()
  }, function () {}, 'dom-autofocus' + id)
}
