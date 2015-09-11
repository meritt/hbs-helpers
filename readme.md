# Helpers

[![NPM version](https://badge.fury.io/js/hbs-helpers.svg)](http://badge.fury.io/js/hbs-helpers) [![Dependency Status](https://david-dm.org/meritt/hbs-helpers.svg?theme=shields.io)](https://david-dm.org/meritt/hbs-helpers) [![devDependency Status](https://david-dm.org/meritt/hbs-helpers/dev-status.svg?theme=shields.io)](https://david-dm.org/meritt/hbs-helpers#info=devDependencies)

View helpers for any [handlebars](http://handlebarsjs.com) projects. For express 3 I prefer using [express-hbs](https://github.com/barc/express-hbs) and for koa — [koa-hbs](https://github.com/jwilm/koa-hbs). Btw, all helpers can work without handlebars.

## Installation

```bash
$ npm i --save hbs-helpers
```

### Configure for express-hbs

```js
const hbs = require('express-hbs');
const helpers = require('hbs-helpers');

for (let helper in helpers) {
  hbs.registerHelper(helper, helpers[helper]);
}
```

## Helpers

* `downsize(text[, options])`
* `length(number)`
* `formatdate(date[, options])`
* `rusweek(date[, options])`
* `formatyear(date)`
* `timeago(date[, options])`
* `formatmoney(number)`
* `plural(count[, options])`
* `rubles(number)`
* `htmlescape(text)`
* `urlencode(text)`
* `striptags(text)`

## Author

* [Alexey Simonenko](mailto:alexey@simonenko.su), [simonenko.su](http://simonenko.su)

## License

The MIT License, see the included `license.md` file.
