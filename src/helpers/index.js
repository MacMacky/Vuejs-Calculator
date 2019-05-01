import { SIGN_REGEX } from "../store";



const equalsLogic = (ops = [], value = '') => {
  let len = ops.length, total = null, i = 0, item = '';
  if (!len) {
    return value;
  } else {
    while (i < len) {
      item = ops[i];
      if (SIGN_REGEX.test(item)) {
        if (!total) {
          total = mathLogic(ops[i - 1], ops[i + 1], item);
        } else {
          total = mathLogic(total, ops[i + 1], item);
        }
        i += 2;
      } else {
        i++;
      }
    }
    return total;
  }
}



const mathLogic = (num1, num2, symbol) => {
  let value = 0;
  num1 = returnRealNum(num1);
  num2 = returnRealNum(num2);
  switch (symbol) {
    case '+':
      value = num1 + num2;
      break;
    case '-':
      value = num1 - num2;
      break;
    case '÷':
      value = num1 / num2;
      break;
    case '×':
      value = num1 * num2;
      break;
    default:
      value = num1 + num2;
      break;
  }
  return value;
};


const returnRealNum = (num) => {
  return num % 1 < 1 ? parseFloat(num) : parseInt(num)
}

export {
  equalsLogic,
  returnRealNum
}