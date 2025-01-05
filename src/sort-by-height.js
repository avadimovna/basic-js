const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      minusArr.push(i);
    }
  }
  clearArr = arr.filter((num) => num !== -1).sort((a, b) => (a - b));
  clearIndex = 0;
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (minusArr.includes(i)) {
      result.push(-1);
    } else {
      result.push(clearArr[clearIndex]);
      clearIndex += 1;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
