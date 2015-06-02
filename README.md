# tap-dev-tool

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Prettify TAP output in Chrome/FireFox DevTools console. Works best with [tape](https://www.npmjs.com/package/tape).

## Install

You can install with [npm](https://www.npmjs.com/):

```sh
npm install tap-dev-tool --save-dev
```

## Usage

[![NPM](https://nodei.co/npm/tap-dev-tool.png)](https://www.npmjs.com/package/tap-dev-tool)

There are two primary ways of using this module.

## Browserify Plugin

This allows you to utilize 

### Require Hook

Before your tests, use a require hook like this:

```js
require('tap-dev-tool/register')

var test = require('tape')

test('should do something', function (t) { 
  ...
})
```

## License

MIT, see [LICENSE.md](http://github.com/Jam3/tap-dev-tool/blob/master/LICENSE.md) for details.
