"use strict";

var utils = require('./../utils');

module.exports = function(date, options) {
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

  var text = date.getFullYear() + '-'
           + utils.pad(date.getMonth() + 1) + '-'
           + utils.pad(date.getDate());

  if (options.htmltag) {
    text = '<time datetime="' + date.toISOString() + '">' + text + '</time>';
  }

  return text;
};