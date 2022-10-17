const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(myArr) {
    var count = 1;

    for (var i = 0; i < myArr.length; i++) {
      if (Array.isArray(myArr[i])) {
        count += this.calculateDepth(myArr.flat())
        break
      }
    }
    return count
  }
}

module.exports = {
  DepthCalculator
}
