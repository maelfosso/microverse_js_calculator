import Big from './big.mjs';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  let x = Big(total);
  let y = Big(next);
  switch (buttonName) {
    case '+/-':
      return x.times(y).times(-1);

    case '%':
      return x.mod(next);

    case '÷':
      return x.div(next);

    case 'X':
      return x.times(next);

    case '-':
      return x.minus(next);

    case '+':
      return x.add(next);

    default:
      return null;
  }
}

export default calculate;