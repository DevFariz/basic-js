const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = "";
  let arr = str.split("");
  let count;
  for(let i = 0; i < arr.length; i++){
    count = 1;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] == arr[j]){
        count++;
        i++;
      }else{
        break;
      }
    }
    if(count === 1){
      res += arr[i]
    }else{
      res += `${count}${arr[i]}`
    }
  }

  return res
}

module.exports = {
  encodeLine
};
