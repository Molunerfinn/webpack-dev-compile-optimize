# webpack-dev-compile-optimize

A plugin for optimizing webpack dev compile time.

**Notice**: It's only used for dev mode & do not try it no your production mode~

# Installation and usage

```
npm install webpack-dev-compile-optimize --save
```

In your dev webpack config:

```
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


