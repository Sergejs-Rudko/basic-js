const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const filteredMatrix = matrix.map((el) => {
    return el.filter((matEl) => matEl === '^^');
  });

  let catsNumber = 0;

  filteredMatrix.forEach((el) => catsNumber += el.length)
  return catsNumber;
}

module.exports = {
  countCats
};
