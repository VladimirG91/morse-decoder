const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  let str = expr.match(/.{10}/g)

  let arr = Object.entries(MORSE_TABLE).toString()

  let modifyArr = arr.replace(/\./g, 10).replace(/\-/g, 11).split(',')

  for (let j = 0; j < 52; j++) {
    if (j % 2 == 0) {
      modifyArr[j] = modifyArr[j].padStart(10, '0')
    }
  }

  let resultObj = {}
  for (let i = 0; i < modifyArr.length; i++) {
    if (i % 2 == 0) {
      resultObj[modifyArr[i]] = modifyArr[i + 1]
    }
  }
  resultObj['**********'] = ' '

  let resultString = ''
  for (let r = 0; r < str.length; r++) {
    resultString += resultObj[str[r]]
  }
  return resultString
}

module.exports = {
  decode,
}
