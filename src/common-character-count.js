const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  var firstArray = s1.split('')
  var secondArray = s2.split('')

  var comCount = 0
  for (var i = 0; i < firstArray.length; i++) {
    for (var n = 0; n < secondArray.length; n++) {
      if (firstArray[i] == secondArray[n]) {
        comCount = comCount + 1
        secondArray.splice(n, 1)
        break
      }
    }
  }
  return comCount
}

module.exports = {
  getCommonCharacterCount
}
