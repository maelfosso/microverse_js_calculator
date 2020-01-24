import Big from './big.mjs';

const operate = (numberOne, numberTwo, operation) => {
  let x = Big(numberOne);
  let y = Big(numberTwo);
  switch (operation) {
    case '+/-':
      return x.times(y).times(-1);

    case '%':
      return x.times(100).toFixed(2);

    case '÷':
      return x.div(y);

    case 'X':
      return x.times(y);

    case '-':
      return x.minus(y);

    case '+':
      return x.add(y);

    default:
      return null;
  }
}

export default operate;
