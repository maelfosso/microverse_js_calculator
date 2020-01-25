import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const digits = [...'0123456789.'];
  const biops = [...'%÷X-+'];
  const unops = ['%', '+/-'];

  if (digits.includes(buttonName)) {
    return {
      total,
      next: next + buttonName,
      operation,
    };
  }
  if (biops.includes(buttonName)) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }
  if (unops.includes(buttonName)) {
    return {
      total: operate(total, 1, buttonName),
      next: '',
      operation: buttonName,
    };
  }
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  return {
    total: operate(total, next, buttonName),
    next: '',
    operation: buttonName,
  };
};

export default calculate;
