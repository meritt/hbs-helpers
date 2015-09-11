'use strict';

module.exports = function urlencode(text) {
  if (!text) {
    return '';
  }

  return encodeURIComponent(text);
};
