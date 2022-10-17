const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  myArray: [],
  getLength() {
    return this.myArray.length
  },
  addLink(val) {
    this.myArray.push(val)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.myArray.length) {
      this.myArray = [];
      throw new Error("You can't remove incorrect link!")
    }
    var newArr = this.myArray.slice(0, position - 1)
    newArr.push(...this.myArray.slice(position))
    this.myArray = [...newArr]
    return this
  },
  reverseChain() {
    this.myArray.reverse()
    return this
  },
  finishChain() {
    var chain = this.myArray.map((i, x) => {
      return `( ${i} )` + ((x === this.myArray.length - 1) ? '' : '~~')
    }).join('')
    this.myArray = []
    return chain
  }
}

module.exports = {
  chainMaker
}
