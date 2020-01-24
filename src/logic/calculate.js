import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const digits = [...'0123456789.'];
  const biops = [...'%÷X-+'];
  const unops = ['%', '+/-']

  if (digits.includes(buttonName)) {
    return {
      total,
      next: next + buttonName,
      operation
    }
  } else {
    if (biops.includes(buttonName)) {
      return {
        total,
        next,
        operation: buttonName
      }
    } else {
      if (unops.includes(buttonName)) {
        return {
          total: operate(total, 1, buttonName),
          next: '',
          operation: buttonName
        }
      } else {
        if (buttonName == 'AC') {
          return {
            total: null,
            next: null,
            operation: null
          }
        } else {
          return {
            total: operate(total, next, buttonName),
            next: '',
            operation: buttonName
          }
        }
      }
    }
  }
  
};

export default calculate;
