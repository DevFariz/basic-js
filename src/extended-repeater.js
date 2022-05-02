const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let res = "", temp = str, addStr = "";

  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }

  if(options.addition !== undefined){
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      addStr += `${options.addition}${options.additionSeparator}`;
    };
    let x = res.lastIndexOf(options.separator)
    addStr = addStr.slice(0, x);
  }

  temp += addStr;

  for (let x = 0; x < options.repeatTimes; x++) {
    res += `${temp}${options.separator}`;
  };
  let x = res.lastIndexOf(options.separator)
  res = res.slice(0, x);  
  
  return res;
}

module.exports = {
  repeater
};
