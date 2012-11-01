path = require('path').normalize __dirname

exports.load = (application, hbs) ->
  {registerHelper, handlebars} = hbs

  for name in ['datetime', 'format', 'length', 'wrap']
    fn = require "#{path}/helpers/#{name}"
    fn.call application, registerHelper, handlebars.helpers