const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    // write your solution here
    let arrOfString = [],
    arrOfStringMod = [],
    arrOfStringRes = [];
  let curStr = '',
  strFin = '';

    for (let i = 0; i < expr.length; i += 10) {
        arrOfString.push(expr.substr(i, 10));
      }

      for (let i = 0; i < arrOfString.length; i++) {
        curStr = arrOfString[i].replace(/^0+/, '');
        arrOfStringMod.push(curStr);
      }

      for (let i = 0; i < arrOfStringMod.length; i++) {

        if (arrOfStringMod[i] === '**********') {
          arrOfStringMod[i] = arrOfStringMod[i].replace('**********', ' ');
        }

        if (arrOfStringMod[i] === '10') {
          arrOfStringMod[i] = arrOfStringMod[i].replace('10', '.');
        }

        if (arrOfStringMod[i] === '11') {
          arrOfStringMod[i] = arrOfStringMod[i].replace('11', '-');
        }

        if (arrOfStringMod[i].length > 2) {
          curStr = arrOfStringMod[i].split('10').join('.');
          arrOfStringMod[i] = curStr.split('11').join('-');
        }
      }

      for (let i = 0; i < arrOfStringMod.length; i++) {
        for (let key in MORSE_TABLE) {
          if (arrOfStringMod[i] == key) {
            arrOfStringRes.push(MORSE_TABLE[key]);
          }
        }
        if (arrOfStringMod[i] === ' ') {
          arrOfStringRes.push(arrOfStringMod[i]);
        }
      }

      return strFin = arrOfStringRes.join('');     
};
console.log(decode("000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110"));


module.exports = {
    decode
}