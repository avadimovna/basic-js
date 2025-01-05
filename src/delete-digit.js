const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArray = String(n).split('');
  let minDigit;
  for (let i = 0; i < nArray.length; i += 1) {
    if (nArray[i] < nArray[i+1]) {
      minDigit = nArray[i];
      break;
    }
  }
  if (!minDigit) {
    minDigit = nArray[nArray.length - 1];
  }
  const nString = nArray.join('');
  const index = nString.indexOf(minDigit);
  return parseInt(nString.slice(0, index) + nString.slice(index + 1));
}

module.exports = {
  deleteDigit
};
