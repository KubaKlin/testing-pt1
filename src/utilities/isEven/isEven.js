export const isEven = (number) => {
  if (typeof number !== 'number' || isNaN(number) || !isFinite(number)) {
    return undefined;
  }
  
  return number % 2 === 0;
};