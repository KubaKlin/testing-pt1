import { getSquaredNumbers } from './getSquaredNumbers';

describe('getSquaredNumbers function', () => {
  describe('when provided with valid array of numbers', () => {
    describe('and array contains positive integers', () => {
      it('should return correct values', () => {
        const result = getSquaredNumbers([1, 2, 3, 4, 5]);
        expect(result).toEqual([1, 4, 9, 16, 25]);
      });
    });

    describe('and array contains negative numbers', () => {
      it('should return correct values', () => {
        const result = getSquaredNumbers([-2, 3, -4, 5]);
        expect(result).toEqual([4, 9, 16, 25]);
      });
    });

    describe('and array contains decimal numbers', () => {
      it('should return correct values', () => {
        const result = getSquaredNumbers([-1.5, -2.5]);
        expect(result).toEqual([2.25, 6.25]);
      });
    });

    describe('and array has single element', () => {
      it('should return array with single squared negative number', () => {
        const result = getSquaredNumbers([-8]);
        expect(result).toEqual([64]);
      });

      it('should return array with single squared decimal', () => {
        const result = getSquaredNumbers([2.5]);
        expect(result).toEqual([6.25]);
      });
    });

    describe('and array is empty', () => {
      it('should return empty array for empty input', () => {
        const result = getSquaredNumbers([]);
        expect(result).toEqual([]);
      });
    });
  });

  describe('when provided with invalid inputs', () => {
    describe('and input is not an array', () => {
      it('should throw error for null', () => {
        expect(() => getSquaredNumbers(null)).toThrow('Input must be an array');
      });

      it('should throw error for undefined', () => {
        expect(() => getSquaredNumbers(undefined)).toThrow('Input must be an array');
      });

      it('should throw error for string', () => {
        expect(() => getSquaredNumbers('123')).toThrow('Input must be an array');
      });

      it('should throw error for number', () => {
        expect(() => getSquaredNumbers(123)).toThrow('Input must be an array');
      });

      it('should throw error for object', () => {
        expect(() => getSquaredNumbers({})).toThrow('Input must be an array');
      });

      it('should throw error for boolean', () => {
        expect(() => getSquaredNumbers(true)).toThrow('Input must be an array');
      });
    });

    describe('and array contains non-numeric values', () => {
      it('should throw error for array with strings', () => {
        expect(() => getSquaredNumbers([1, '2', 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with null', () => {
        expect(() => getSquaredNumbers([1, null, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with undefined', () => {
        expect(() => getSquaredNumbers([1, undefined, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with boolean', () => {
        expect(() => getSquaredNumbers([1, true, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with objects', () => {
        expect(() => getSquaredNumbers([1, {}, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with arrays', () => {
        expect(() => getSquaredNumbers([1, [2], 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with NaN', () => {
        expect(() => getSquaredNumbers([1, NaN, 3])).toThrow('All array elements must be valid numbers');
      });
    });
  });

  it('should not mutate the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const arrayClone = [...originalArray];

    getSquaredNumbers(originalArray);

    expect(originalArray).toEqual(arrayClone);
    expect(originalArray.length).toBe(arrayClone.length);
  });
});