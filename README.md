# webpack-dev-compile-optimize

A plugin for optimizing webpack dev compile time.

**Notice**: It's only used for dev mode & do not try it on your production mode~

[![npm](https://img.shields.io/npm/dm/webpack-dev-compile-optimize.svg)]() [![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()


# Installation and usage

```
npm install webpack-dev-compile-optimize --save
```

In your dev webpack config:

```js
const DevCompileOptimize = require('webpack-dev-compile-optimize')

//...

plugins: [
  new DevCompileOptimize()
]

//...

```

And then enjoy the fast recompilation time!

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017 Molunerfinn


