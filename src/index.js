// Задача № 1

function padString(originalString, finalLength, symbol, isAfter) {
  let finalString = '';
  if (finalLength <= originalString.length) {
    console.log('Длина финальной строки должна быть больше длины изначальной строки');
  } else {
    if (isAfter) {
      finalString = originalString + symbol.repeat(finalLength - originalString.length);
    } else {
      finalString = symbol.repeat(finalLength - originalString.length) + originalString; 
    }  
  }
    return finalString;
};

console.log(padString('Hello', 10, '@', false))

// Задача № 2

function getResult(firstNum, secondNum, sign) {
  if (sign == '+') {
      result = firstNum + secondNum;
  }
  else if (sign == '-') {
    result = firstNum - secondNum;
  }
  else if (sign == '*') {
    result = firstNum * secondNum;
  }
  else if (sign == '/') {
    result = firstNum / secondNum;
  }
    return result  
}

console.log(getResult(45, 12, '/'));

// Задача № 3

function isCharPresent(string, char) {
  let counter = 0; 
   
  for(let i = 0; i <= string.length-1; i++) {
    if(string.charAt(i) === char) {
      counter++;  
      }

    }
    if(counter > 0) { 
      return true;
    } else {
      return false
    }
    
}

console.log(isCharPresent('Hello', 'e'));



