import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  const digits = [...'0123456789.'];
  const biops = [...'%÷X-+'];
  const unops = ['%', '+/-'];
  
  if (digits.includes(buttonName)) {
    return {
      total,
      next: (next == null ? '' : next) + buttonName,
      operation,
    };
  }
  if (biops.includes(buttonName)) {
    return {
      total: (total == null ? next : total),
      next: null,
      operation: buttonName,
    };
  }
  if (unops.includes(buttonName)) {
    return {
      total: operate((total == null ? next : total), 1, buttonName),
      next: null,
      operation: null,
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
    total: operate(total, next, operation),
    next: null,
    operation: null,
  };
};

export default calculate;
