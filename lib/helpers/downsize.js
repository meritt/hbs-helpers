"use strict";

var downsize = require('downsize'),
utils = require('./../utils');

module.exports = function(text, options) {
  options = utils.opts(options);
  text = downsize(text, options);

  return text;
};