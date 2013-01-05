module.exports = (registerHelper, helpers) ->
  weeks  = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

  pad = (n) ->
    if n < 10 then "0#{n}" else n

  plural = (int, words) ->
    options = {words}
    "#{int} #{helpers.helper_plural(int, options)}"

  floor = (int) ->
    Math.floor int

  to_object = (object) ->
    object = new Date object if typeof object is 'string'
    object

  distance_of_time_in_words = (to, from) ->
    seconds = (to - from) / 1000
    minutes = floor seconds / 60

    if minutes is 0      then return 'меньше минуты назад'
    if minutes is 1      then return 'минута назад'
    if minutes < 5       then return plural(minutes, ['минута', 'минуты', 'минут']) + ' назад'
    if minutes < 45      then return plural(minutes, ['минута', 'минуты', 'минут']) + ' назад'
    if minutes < 90      then return 'около часа назад'
    if minutes < 1440    then return 'около ' + plural(floor(minutes / 60), ['часа', 'часов', 'часов']) + ' назад'
    if minutes < 2880    then return 'день назад'
    if minutes < 43200   then return plural(floor(minutes / 1440), ['день', 'дня', 'дней']) + ' назад'
    if minutes < 86400   then return 'около месяца назад'
    if minutes < 525960  then return plural(floor(minutes / 43200), ['месяц', 'месяца', 'месяцев']) + ' назад'
    if minutes < 1051199 then return 'около года назад'

    plural(floor(minutes / 525960), ['год', 'года', 'лет']) + ' назад'

  to_date = (date, humane) ->
    date = to_object date

    if humane is true
      weeks[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + ', ' + date.getFullYear()
    else
      date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())

  to_datetime = (date, humane) ->
    date = to_object date

    if humane is true
      distance_of_time_in_words new Date, date
    else
      date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes())

  htmltag = (date, text) ->
    date = to_object date
    '<time datetime="' + date.toISOString() + '">' + text + '</time>'

  ###
  # Helpers
  ###
  registerHelper 'helper_date', (date, options = {}) ->
    options = if options?.hash? then options.hash else options

    text = to_date date, options.humane is true

    if options.html? and options.html is true
      htmltag date, text
    else
      text

  registerHelper 'helper_datetime', (date, options = {}) ->
    options = if options?.hash? then options.hash else options

    text = to_datetime date, options.humane is true

    if options.html? and options.html is true
      htmltag date, text
    else
      text

  registerHelper 'helper_year', ->
    today = new Date
    today.getFullYear()

  registerHelper 'helper_plural', (count, options = {}) ->
    options = if options?.hash? then options.hash else options

    if not options.words or options.words.length isnt 3
      throw new Error 'Количество словоформ должно быть 3'

    count = Math.abs(count) % 100
    rest  = count % 10

    return options.words[2] if count > 10 and count < 20
    return options.words[1] if rest > 1 and rest < 5
    return options.words[0] if rest is 1

    options.words[2]