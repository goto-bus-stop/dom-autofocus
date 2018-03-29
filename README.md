# dom-autofocus

focus an element when it enters the dom

## Why?

Because the `autofocus` attribute only works on page load.

This module uses a [MutationObserver](https://github.com/shama/on-load) to call `.focus()` immediately after the element is mounted.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/dom-autofocus.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dom-autofocus
[travis-image]: https://img.shields.io/travis/goto-bus-stop/dom-autofocus.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/dom-autofocus
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install dom-autofocus
```

## Usage

`dom-autofocus` works well with non-virtual DOM diffing libraries like choo:

```js
var autofocus = require('dom-autofocus')
var html = require('choo/html')

module.exports = function view () {
  return html`
    <body>
      Type here:
      ${autofocus(html`
        <input type="text">
      `)}
    </body>
  `
}
```

## API

### `el = autofocus(el)`

Autofocus the element when it enters the DOM. Returns the input `el`.

## License

[Apache-2.0](LICENSE.md)
