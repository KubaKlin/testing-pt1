export const getSquaredNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number' || isNaN(numbers[i])) {
      throw new Error('All array elements must be valid numbers');
    }
  }

  return numbers.map(number => number * number);
}; 