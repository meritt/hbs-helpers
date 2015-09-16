'use strict';

var utils = require('./../utils');

module.exports = function length(list) {
  if (utils.is.obj(list)) {
    return Object.keys(list).length;
  }

  if (utils.is.arr(list)) {
    return list.length;
  }

  return false;
};
