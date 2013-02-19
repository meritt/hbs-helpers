# Handlebars helpers for Express 3

View helpers for [handlebars engine](https://github.com/barc/express-hbs). Work well with Express 3.

How to use with JavaScript
--------------------------

```javascript
var engine = require('express-hbs');
var express = require('express');

var app = express();

app.configure(function() {
  app.engine('hbs', engine.express3);

  app.set('view engine', 'hbs');
  app.set('helpers', engine.handlebars.helpers);
});

var helpers = require('express-helpers').helpers;
helpers(app, engine);
```

Or with CoffeeScript
--------------------

```coffeescript
engine = require 'express-hbs'
express = require 'express'

app = express()

app.configure ->
  app.engine 'hbs', engine.express3

  app.set 'view engine', 'hbs'
  app.set 'helpers', engine.handlebars.helpers

{helpers} = require 'express-helpers'
helpers app, engine
```

-----------------------------------

Список хелперов:
----------------

* helper_date
* helper_datetime
* helper_year
* helper_plural
* helper_striptags
* helper_htmlescape
* helper_urlencode
* helper_money
* helper_length
* helper_wrap

**Options:**

helper_date (date, options)

 * humane _boolean_ default: false
 * html _boolean_ default: false

helper_datetime (date, options)

 * humane _boolean_ default: false
 * html _boolean_ default: false

helper_plural (count, options)

 * words _array_

helper_wrap (text, options)

 * size _number_ default: 40

-----------------------------------

Author
------

* [Alexey Simonenko](mailto:alexey@simonenko.su), [simonenko.su](http://simonenko.su)