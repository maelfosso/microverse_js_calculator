import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;
  return operate(total, next, buttonName);
}

export default calculate;
