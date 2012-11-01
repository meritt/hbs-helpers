module.exports = (registerHelper, helpers) ->
  registerHelper 'helper_wrap', (text, options) ->
    options = if options?.hash? then options.hash else {}

    length = parseInt options.size or 0, 10
    length = 40 if length <= 0

    if text.length > length
      length = length - 1
      short  = ''
      words  = text.split ' '

      for word in words
        if word not in ['', ' ']
          next = short + word
          break if next.length >= length
          short += word + ' '

      short = short.slice 0, -1
      text  = short + '…' if text isnt short

    text