function basicOp(operator, value1, value2) {
    let result;
  
    switch (operator) {
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      case '*':
        result = value1 * value2;
        break;
      case '/':
        result = value1 / value2;
        break;
      default:
        console.log('Invalid operator');
        return;
    }
  
    return result;
  }
  
  console.log(basicOp('+', 4, 7)); 
  console.log(basicOp('-', 10, 5)); 
  console.log(basicOp('*', 3, 5)); 
  console.log(basicOp('/', 10, 2)); 
  console.log(basicOp('%', 4, 2)); 
  