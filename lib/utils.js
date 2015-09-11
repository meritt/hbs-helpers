'use strict';

const util = require('util');

let fun = function(f) {
  return typeof f === 'function';
};
let arr = function(a) {
  return a instanceof Array;
};
let obj = function(o) {
  return o instanceof Object && !fun(o) && !arr(o);
};
let date = function(d) {
  return util.isDate(d) && !isNaN(d);
};
let exst = function(o) {
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
