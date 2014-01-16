"use strict";

module.exports = function(html) {
  return html.replace(/&/g, '&amp;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#039;')
             .replace(/>/g, '&gt;')
             .replace(/</g, '&lt;');
};