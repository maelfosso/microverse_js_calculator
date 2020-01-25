import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  const x = Big(numberOne);
  const y = Big(numberTwo);
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
};

export default operate;
