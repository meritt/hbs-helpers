'use strict';

const wrap = require('downsize');
const utils = require('./../utils');

module.exports = function downsize(text, options) {
  options = utils.opts(options);
  text = wrap(text, options);

  return text;
};
