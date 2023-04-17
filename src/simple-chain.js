const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  show() {
    console.log(this.chains);
  },
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    if(typeof value === "number" && isNaN(value)){
      this.chains.push('NaN');
      return this
    }

    value ? this.chains.push(value.toString()) : this.chains.push(JSON.stringify(value));
    return this
  },
  reverseChain() {
    this.chains.reverse();
    return this
  },
  removeLink(position) {
    if(!position || typeof position !== "number" || position < 0 || position > this.chains.length || !Number.isInteger(position)){
      this.chains = [];
      throw Error('You can\'t remove incorrect link!');
    }
    this.chains.splice((position - 1),1);
    return this
  },
  finishChain(){
    let copy = [...this.chains];
    this.chains = [];
    return copy.map(el => el = `( ${el} )~~`).join('').slice(0, -2);
  }
}

module.exports = {
  chainMaker
};
