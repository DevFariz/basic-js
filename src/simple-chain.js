const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink( value ) {
    this.chain.push(value)
    return this
  },
  removeLink( position ) {
    if(typeof position !== number || number <= 0){
      throw new Error("'You can\'t remove incorrect link!'")
    }
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
