path = require('path').normalize __dirname

exports.helpers = (app, engine) ->
  for name in ['datetime', 'format', 'length', 'wrap']
    fn = require "#{path}/helpers/#{name}"
    fn.call app, engine.registerHelper