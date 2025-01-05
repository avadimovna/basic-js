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
  constructor(isDirect = true) {
    this.isDirect = isDirect; 
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    const upperMessage = message.toUpperCase(); 
    const upperKey = key.toUpperCase(); 
    const alphabetLength = 26;
    let result = "";
    let keyIndex = 0; 

    for (let i = 0; i < upperMessage.length; i++) {
      const messageChar = upperMessage[i];

      if (/[A-Z]/.test(messageChar)) { 
        const messageCode = messageChar.charCodeAt(0) - 65; 
        const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65; 
        const encryptedChar = String.fromCharCode(((messageCode + keyCode) % alphabetLength) + 65); 
        result += encryptedChar;
        keyIndex++; 
      } else {
        result += messageChar; 
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    const upperMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();
    const alphabetLength = 26;
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      const messageChar = upperMessage[i];

      if (/[A-Z]/.test(messageChar)) {
        const messageCode = messageChar.charCodeAt(0) - 65;
        const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
        const decryptedChar = String.fromCharCode(((messageCode - keyCode + alphabetLength) % alphabetLength) + 65);
        result += decryptedChar;
        keyIndex++;
      } else {
        result += messageChar;
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
