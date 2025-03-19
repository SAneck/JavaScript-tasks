function func(a, b, operator){
    if (operator === '+'){
      return a + b
    } else if(operator === '-'){
      return a - b
    }else if(operator === '/'){
      return a / b
    }else if(operator === '*'){
      return a * b
    }else if(operator === '%'){
      return a % b
    }else if(operator === '**'){
      return a ** b
    }
}
  
func(4, 2, '*')

function func(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b
      case '-':
        return a - b
      case '*':
        return a * b
      case '/':
        return a / b
      case '%':
        return a % b
      case '**':
        return a ** b
    }
  }
  
  func(2, 3, '+');
