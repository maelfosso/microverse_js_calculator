import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
  let result;
  switch (operation) {
    case '+/-':
      result = x.times(y).times(-1);
      break;

    case '%':
      result = x.times(100).toFixed(2);
      break;

    case '÷':
      result = x.div(y);
      break;

    case 'X':
      result = x.times(y);
      break;

    case '-':
      result = x.minus(y);
      break;

    case '+':
      result = x.add(y);
      break;

    default:
      result = null;
  }

  console.log(numberOne, numberTwo, operation, result);
  return result;
};

export default operate;
