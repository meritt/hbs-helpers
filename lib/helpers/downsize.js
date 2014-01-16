"use strict";

var wrap = require('downsize'),
utils = require('./../utils');

module.exports = function downsize(text, options) {
  options = utils.opts(options);
  text = wrap(text, options);

  return text;
};