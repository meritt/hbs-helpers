# Helpers

[![NPM version](https://badge.fury.io/js/hbs-helpers.png)](http://badge.fury.io/js/hbs-helpers) [![Dependency Status](https://david-dm.org/meritt/hbs-helpers.png)](https://david-dm.org/meritt/hbs-helpers) [![devDependency Status](https://david-dm.org/meritt/hbs-helpers/dev-status.png)](https://david-dm.org/meritt/hbs-helpers#info=devDependencies)

View helpers for any [handlebars](http://handlebarsjs.com) projects. For express 3 I prefer to use [express-hbs](https://github.com/barc/express-hbs) and for koa I prefer to use [koa-hbs](https://github.com/jwilm/koa-hbs). Btw, all helpers can work without handlebars.

## Installation

```bash
$ npm install hbs-helpers
```

### Configure for express-hbs

```js
var hbs = require('express-hbs');
var helpers = require('hbs-helpers');

for (var helper in helpers) {
  hbs.registerHelper(helper, helpers[helper]);
}
```

## Helpers

* downsize (text[, options])
* length (number)
* formatdate (date[, options])
* rusweek (date[, options])
* formatyear (date)
* timeago (date[, options])
* formatmoney (number)
* plural (count[, options])
* rubles (number)
* htmlescape (text)
* urlencode (text)
* striptags (text)

## Author

* [Alexey Simonenko](mailto:alexey@simonenko.su), [simonenko.su](http://simonenko.su)

## License

The MIT License, see the included `license.md` file.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/meritt/hbs-helpers/trend.png)](https://bitdeli.com/free "Bitdeli Badge")