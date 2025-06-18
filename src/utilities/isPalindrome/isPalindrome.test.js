import { isPalindrome } from './isPalindrome';

describe('isPalindrome function', () => {
  describe('when provided with valid palindromes', () => {
    describe('and string is a simple palindrome', () => {
      it('should return true', () => {
        const result = isPalindrome('Kayak');
        expect(result).toBe(true);
      });
    });

    describe('and string contains spaces and punctuation', () => {
      it('should return true"', () => {
        const result = isPalindrome('Was it a cat I saw');
        expect(result).toBe(true);
      });

      it('should return true', () => {
        const result = isPalindrome('A man, a plan, a canal: Panama');
        expect(result).toBe(true);
      });
    });

    describe('and string contains numbers', () => {
      it('should return true', () => {
        const result = isPalindrome('A1B2b1a');
        expect(result).toBe(true);
      });
    });

    describe('and string is a single character', () => {
      it('should return true for single letter', () => {
        const result = isPalindrome('a');
        expect(result).toBe(true);
      });
    });

    describe('and string is empty', () => {
      it('should return true for empty string', () => {
        const result = isPalindrome('');
        expect(result).toBe(true);
      });
    });
  });

  describe('when provided with non-palindromes', () => {
    it('should return false', () => {
      const result = isPalindrome('Hello!');
      expect(result).toBe(false);
    });
  });

  describe('when provided with invalid inputs', () => {
    it('should throw error for null', () => {
      expect(() => isPalindrome(null)).toThrow('Input must be a string');
    });

    it('should throw error for undefined', () => {
      expect(() => isPalindrome(undefined)).toThrow('Input must be a string');
    });

    it('should throw error for number', () => {
      expect(() => isPalindrome(12321)).toThrow('Input must be a string');
    });

    it('should throw error for boolean', () => {
      expect(() => isPalindrome(true)).toThrow('Input must be a string');
    });

    it('should throw error for object', () => {
      expect(() => isPalindrome({})).toThrow('Input must be a string');
    });

    it('should throw error for array', () => {
      expect(() => isPalindrome(['a', 'b', 'a'])).toThrow('Input must be a string');
    });
  });
}); 