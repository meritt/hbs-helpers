module.exports = (registerHelper, helpers) ->
  registerHelper 'helper_length', (hash) ->
    if typeof hash.length is 'undefined'
      Object.keys(hash).length
    else
      hash.length