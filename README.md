# tap-dev-tool

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

[(Click for a live demo)](https://jam3.github.io/tap-dev-tool/demo/)

Prettify TAP output in Chrome/FireFox DevTools console. Works best with [tape](https://www.npmjs.com/package/tape).

![fail](http://i.imgur.com/xwYZUc7.png)

Comes in the form of a Browserify plugin, so you don't need to change your source code during development. PRs for other integrations (Babel, Webpack) welcome.

## Install

You can install with [npm](https://www.npmjs.com/):

```sh
npm install tap-dev-tool --save-dev
```

## Usage

[![NPM](https://nodei.co/npm/tap-dev-tool.png)](https://www.npmjs.com/package/tap-dev-tool)

### browserify

The preferred way of using this is with a plugin during development. After installing, you can use it with browserify like this:

```sh
browserify index.js --plugin tap-dev-tool > bundle.js
```

Works well during development with [watchify](https://github.com/substack/watchify) and [budo](https://github.com/mattdesl/budo).

### require hook

If you don't want to use the plugin, you can require the tool somewhere at the start of your application.

```js
require('tap-dev-tool/register')

var test = require('tape')

test('should do something', function (t) { 
  ...
})
```

## See Also

- [budo](https://github.com/mattdesl/budo) - fast browser development
- [hihat](https://github.com/Jam3/hihat) - launches DevTools in a new process
- [tap-browser-el](https://www.npmjs.com/package/tap-browser-el)
- [tap-browser-color](https://www.npmjs.com/package/tap-browser-color)
- [tap-console-parser](https://www.npmjs.com/package/tap-console-parser)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/tap-dev-tool/blob/master/LICENSE.md) for details.
