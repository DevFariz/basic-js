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
    let res = "";

    if(options.separator === undefined){
      for(let i = 0; i < options.repeatTimes; i++){
        res += `${str}+`
      }
      res = res.slice(0, res.length - 1);
    }else{
      for(let i = 0; i < options.repeatTimes; i++){
        res += `${str}${options.separator}`
      }
      let x = res.lastIndexOf(options.separator)
      res = res.slice(0, x);
    }
    
    return res;
}

module.exports = {
  repeater
};
