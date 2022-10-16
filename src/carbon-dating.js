const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  var k = 0.693 / HALF_LIFE_PERIOD
  if (typeof sampleActivity !== 'string') {
    return false
  }
  if (sampleActivity > 0) {
    var years = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k)
    if (years > 0) {
      return years
    } else {
      return false
    }
  } else {
    return false
  }
}

module.exports = {
  dateSample
}





