'use strict';

var util = require('util');

var fun = function(f) {
  return typeof f === 'function';
};
var arr = function(a) {
  return a instanceof Array;
};
var obj = function(o) {
  return o instanceof Object && !fun(o) && !arr(o);
};
var date = function(d) {
  return util.isDate(d) && !isNaN(d);
};
var exst = function(o) {
  return typeof o !== 'undefined' && o !== null;
};

exports.is = {
  fun: fun,
  arr: arr,
  obj: obj,
  date: date,
  exst: exst
};

exports.opts = function(options) {
  if (!obj(options)) {
    return {};
  }

  return obj(options.hash) ? options.hash : options;
};

exports.pad = function(n) {
  return (n < 10) ? '0' + n : n;
};
