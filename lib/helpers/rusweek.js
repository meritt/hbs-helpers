'use strict';

var utils = require('./../utils');

var weeks = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
];

var months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
];

module.exports = function rusweek(date, options) {
  options = utils.opts(options);

  if (!date || arguments.length === 1) {
    date = new Date();
  } else {
    date = new Date(date);

    if (!utils.is.date(date)) {
      throw new Error('Invalid date');
    }
  }

  if (!utils.is.exst(options.htmltag)) {
    options.htmltag = true;
  }

  var text = weeks[date.getDay()] + ', ' +
             date.getDate() + ' ' +
             months[date.getMonth()] + ', ' +
             date.getFullYear();

  if (options.htmltag) {
    text = '<time datetime="' + date.toISOString() + '">' + text + '</time>';
  }

  return text;
};
