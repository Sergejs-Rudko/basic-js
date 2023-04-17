const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains : [1,"2",3],
  showChains(){
    console.log(this.chains)
  },
  getLength() {
    console.log(this.chains.length)
    return this.chains.length
  },
  addLink(value) {
    if(!value){
      value = "";
    }
    this.chains = [...this.chains, value.toString()]
  },
  removeLink(position) {
    if(position < 0 || position > this.chains.length){
      throw new Error("You can't remove incorrect link!");
    }
    this.chains = this.chains.filter((el,index)=> index !== position - 1);
  },
  reverseChain() {
    this.chains = this.chains.reverse()
  },
  finishChain() {
    let newChain = this.chains.map((el) => {
      return el = `( ${el} )~~`
    }).join('').slice(0,-2);
    return newChain
  }
};

module.exports = {
  chainMaker
};
