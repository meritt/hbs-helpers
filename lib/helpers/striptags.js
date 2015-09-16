'use strict';

var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
var comments = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

module.exports = function striptags(html) {
  if (!html) {
    return '';
  }

  return html.replace(comments, '').replace(tags, '');
};
