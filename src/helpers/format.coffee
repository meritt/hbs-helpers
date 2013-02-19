module.exports = (registerHelper) ->

  registerHelper 'helper_striptags', (html) ->
    tags     = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
    comments = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi

    html.replace(comments, '').replace(tags, '')

  registerHelper 'helper_htmlescape', (html) ->
    html.replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')

  registerHelper 'helper_urlencode', (text) ->
    encodeURIComponent text

  registerHelper 'helper_money', (number) ->
    return '' if number is false

    number = (number + '').replace /[^0-9+\-Ee.]/g, ''
    n = if not isFinite +number then 0 else +number
    prec = 0; sep = ' '; dec = '.'; s = ''

    toFixedFix = (n, prec) ->
      k = Math.pow 10, prec
      '' + (Math.round n * k) / k

    s = (if prec then toFixedFix n, prec else '' + Math.round n).split '.'

    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep) if s[0].length > 3

    if (s[1] or '').length < prec
      s[1] = s[1] || ''
      s[1] += new Array(prec - s[1].length + 1).join '0'

    s.join dec