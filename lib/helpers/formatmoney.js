'use strict';

function toFixedFix(n, prec) {
  var k = Math.pow(10, prec);
  return '' + (Math.round(n * k)) / k;
}

module.exports = function formatMoney(number) {
  if (number === false) {
    return '';
  }

  number = ('' + number).replace(/[^0-9+\-Ee.]/g, '');

  var n = !isFinite(+number) ? 0 : +number;
  var prec = 0;
  var sep = ' ';
  var dec = '.';
  var s = '';

  if (prec) {
    s = toFixedFix(n, prec);
  } else {
    s = '' + Math.round(n);
  }

  s = s.split('.');

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] = s[1] + new Array(prec - s[1].length + 1).join('0');
  }

  return s.join(dec);
};
