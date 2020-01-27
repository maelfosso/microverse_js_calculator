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
  if (total && next && operation) {
    const result = operate(total, next, operation);
    return {
      total: result !== 'xxxx' ? result : null,
      next: null,
      operation: null,
      error: result !== 'xxxx' ? null : "Not allowed",
    };
  }

  return null;
};

export default calculate;
