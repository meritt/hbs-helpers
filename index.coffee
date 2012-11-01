exports.load = (application, hbs) ->
  {registerHelper, handlebars} = hbs

  for helper in ['datetime', 'format', 'length', 'wrap']
    fn = require "helpers/#{name}"
    fn.call application, registerHelper, handlebars.helpers