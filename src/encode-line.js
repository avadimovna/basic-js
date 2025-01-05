const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  if (str === '') return '';
  for (let i = 1; i < str.length; i += 1) {
    if (str[i] === str[i - 1]) {
      count += 1;
    } else {
      result += count > 1 ? `${count}${str[i - 1]}` : `${str[i - 1]}`;
      count = 1;
    }
  }
  result += count > 1 ? `${count}${str[str.length - 1]}` : `${str[str.length - 1]}`;
  return result;
}

module.exports = {
  encodeLine
};
