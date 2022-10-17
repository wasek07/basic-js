const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  var myArray = []

  if (Array.isArray(members)) {
    for (var i = 0; i < members.length; i++) {
      if (typeof (members[i]) === 'string') {
        for (var x = 0; x < members[i].length; x++) {
          if (members[i][x] !== ' ') {
            myArray.push(members[i][x].toUpperCase())
            break
          }
        }
      }
    }
    return myArray.sort().join('')

  }
  else return false
}

module.exports = {
  createDreamTeam
}
