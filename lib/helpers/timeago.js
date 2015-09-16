'use strict';

var utils = require('./../utils');
var plural = require('./plural');

function numeral(count, words) {
  return count + ' ' + plural(count, {numeral: words});
}

function distance(to, from) {
  var seconds = (to - from) / 1000;
  var minutes = Math.floor(seconds / 60);

  if (minutes === 0) {
    return 'меньше минуты назад';
  }

  if (minutes === 1) {
    return 'минута назад';
  }

  if (minutes < 5) {
    return numeral(minutes, ['минута', 'минуты', 'минут']) + ' назад';
  }

  if (minutes < 45) {
    return numeral(minutes, ['минута', 'минуты', 'минут']) + ' назад';
  }

  if (minutes < 90) {
    return 'около часа назад';
  }

  if (minutes < 1440) {
    return 'около ' + numeral(Math.floor(minutes / 60), ['часа', 'часов', 'часов']) + ' назад';
  }

  if (minutes < 2880) {
    return 'день назад';
  }

  if (minutes < 43200) {
    return numeral(Math.floor(minutes / 1440), ['день', 'дня', 'дней']) + ' назад';
  }

  if (minutes < 86400) {
    return 'около месяца назад';
  }

  if (minutes < 525960) {
    return numeral(Math.floor(minutes / 43200), ['месяц', 'месяца', 'месяцев']) + ' назад';
  }

  if (minutes < 1051199) {
    return 'около года назад';
  }

  return numeral(Math.floor(minutes / 525960), ['год', 'года', 'лет']) + ' назад';
}

module.exports = function timeago(date, options) {
  options = utils.opts(options);

  if (!date || arguments.length === 1) {
    throw new Error('Invalid date');
  }

  date = new Date(date);

  if (!utils.is.date(date)) {
    throw new Error('Invalid date');
  }

  if (!utils.is.exst(options.htmltag)) {
    options.htmltag = true;
  }

  var text = distance(new Date(), date);

  if (options.htmltag) {
    text = '<time datetime="' + date.toISOString() + '">' + text + '</time>';
  }

  return text;
};
