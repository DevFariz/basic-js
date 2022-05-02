const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isDirect = true){
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error("Incorrect arguments!")
    }
    let resText = "", upperKey = key.toUpperCase();
    
    while(upperKey.length < message.length){
      upperKey += key.toUpperCase();
    }

    let x = 0;
    for(let i = 0; i < message.length; i++){
      if(!message[i].match(/[a-z]/i)){
        resText += message[i];
      }else{
        resText += String.fromCharCode(((message[i].toUpperCase().charCodeAt(0) + upperKey[x++].charCodeAt(0)) % 26) + 65)
      }
    }

    if(this.isDirect){
      return resText
    }else{
      return resText.split("").reverse().join("")
    }

  }

  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined){
      throw new Error("Incorrect arguments!")
    }

    let resText = "", upperKey = key.toUpperCase();

    while(upperKey.length < encryptedMessage.length){
      upperKey += key.toUpperCase();
    }

    let x = 0;
    for(let i = 0; i < encryptedMessage.length; i++){
      if(!encryptedMessage[i].match(/[a-z]/i)){
        resText += encryptedMessage[i];
      }else{
        resText += String.fromCharCode(((encryptedMessage[i].toUpperCase().charCodeAt(0) - upperKey[x++].charCodeAt(0) + 26) % 26) + 65)
      }
    }

    if(this.isDirect){
      return resText
    }else{
      return resText.split("").reverse().join("")
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
