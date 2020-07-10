// Задача № 1

function padString(originalString, finalLength, symbol, isAfter) {
  let finalString = '';
  
  if (finalLength > originalString.length) {
    let diff = finalLength - originalString.length
    
    if (isAfter) {
      finalString = originalString + symbol.repeat(diff);
    } else {
      finalString = symbol.repeat(diff) + originalString; 
    }
    
    return finalString;
  
  } else {
    
    return originalString;
  };
};

console.log(padString('Hello', 10, '@', true))

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

// Задача № 4

function charIndexOf(string, char) {
 
  for(let i = 0; i <= string.length-1; i++) {
    if(string.charAt(i) === char) {
      var index = i;  
    }
  }
   
  if (index === undefined) {
     return -1;
   } else {
     return index;
   }    
}

console.log(charIndexOf('Hello', 'o'));


