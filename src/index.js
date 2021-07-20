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
  return expr.split('**********')
    .map(word => {
      const letters = [];
      for (let i = 0; i < word.length; i+=10) {
        letters.push(word.slice(i, i+10)); 
      };
      return letters.map(letter => {
        const start = letter.indexOf('1');
        const morseLetter = letter
          .slice(start)
          .replace(/10/g, '.')
          .replace(/11/g, '-');
        
        return MORSE_TABLE[morseLetter];
      }).join('');
    })
    .join(' ');
}

module.exports = {
    decode
}