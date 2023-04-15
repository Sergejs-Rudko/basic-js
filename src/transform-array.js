/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) {
    return arr;
  }
  const theCommands = ['--double-next', '--discard-prev', '--discard-next', '--double-prev'];
  let copyArr = [...arr];


  copyArr = copyArr.map((el, index, array) => {
    if (array[index + 1] === '--discard-prev') {
      return undefined
    }

    if (el === '--discard-next') {
      return array[index + 1] = undefined
    }

    if (el === '--double-prev') {
      return array[index - 1]
    }

    if (el === '--double-next') {
      return array[index + 1]
    }
    return el
  })
  copyArr = copyArr.filter(el => el !== undefined)
  copyArr = copyArr.filter(el => !theCommands.some(element => element === el));


  return copyArr

}

module.exports = {
  transform
};
