"use strict";

var fun = function(f) {
  return typeof f === 'function';
},

arr = function(a) {
  return a instanceof Array;
},

obj = function(o) {
  return o instanceof Object && !fun(o) && !arr(o);
};

exports.is = {
  fun: fun,
  arr: arr,
  obj: obj
};

exports.opts = function(options) {
  if (!obj(options)) {
    return {};
  }

  return obj(options.hash) ? options.hash : options;
};