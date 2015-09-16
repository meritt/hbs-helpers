'use strict';

var utils = require('./../utils');

module.exports = function formatYear(date) {
  if (!date || arguments.length === 1) {
    date = new Date();
  } else {
    date = new Date(date);

    if (!utils.is.date(date)) {
      throw new Error('Invalid date');
    }
  }

  return date.getFullYear();
};
