'use strict';

module.exports = function htmlescape(html) {
  if (!html) {
    return '';
  }

  return html.replace(/&/g, '&amp;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#039;')
             .replace(/>/g, '&gt;')
             .replace(/</g, '&lt;');
};
