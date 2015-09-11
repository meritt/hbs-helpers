'use strict';

const numeral = require('rubles').rubles;

module.exports = function rubles(number) {
  return numeral(number);
};
