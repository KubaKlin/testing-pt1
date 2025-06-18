export const getNegativeNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number' || isNaN(numbers[i])) {
      throw new Error('All array elements must be valid numbers');
    }
  }

  return numbers.filter(number => number < 0);
}; 