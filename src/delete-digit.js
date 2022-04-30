const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split("");
  let resArr = [];

  if(arr.length === 2){
    if(arr[0] > arr[1]){
      return +arr[0]
    }else{
      return arr[1]
    }
  }

  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i] < arr[i + 1]){
      isTrue = false
      continue;
    }else{
      resArr.push(arr[i]);
    }
  }

  resArr.push(arr[arr.length - 1])

 return +resArr.join("")
}

module.exports = {
  deleteDigit
};
