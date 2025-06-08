export const getSmallestNumber = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }

  if (numbers.length === 0) {
    throw new Error('Array cannot be empty');
  }

  // Validate that all elements are numbers
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number' || isNaN(numbers[i])) {
      throw new Error('All array elements must be valid numbers');
    }
  }

  return Math.min(...numbers);
}; 