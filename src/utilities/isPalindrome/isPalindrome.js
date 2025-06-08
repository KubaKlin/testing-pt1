export const isPalindrome = (string) => {

  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }

  const normalizedString = string.toLowerCase();
  
  const reversedString = normalizedString.split('').reverse().join('');
  
  return normalizedString === reversedString;
}; 