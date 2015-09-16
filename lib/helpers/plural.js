'use strict';

var utils = require('./../utils');

module.exports = function plural(count, options) {
  options = utils.opts(options);

  if (!utils.is.arr(options.numeral) || options.numeral.length !== 3) {
    throw new Error('options.numeral should be an array with a length of 3');
  }

  count = Math.abs(count) % 100;
  var rest = count % 10;

  if (count > 10 && count < 20) {
    return options.numeral[2];
  }

  if (rest > 1 && rest < 5) {
    return options.numeral[1];
  }

  if (rest === 1) {
    return options.numeral[0];
  }

  return options.numeral[2];
};
