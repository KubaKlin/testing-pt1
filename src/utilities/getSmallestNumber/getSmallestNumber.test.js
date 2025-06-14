import { getSmallestNumber } from './getSmallestNumber';

describe('getSmallestNumber()', () => {
  describe('when provided with valid array of numbers', () => {
    describe('and array contains positive and negative numbers', () => {
      it('should return correct value', () => {
        const result = getSmallestNumber([2, -5, 10, 1, 4]);
        expect(result).toBe(-5);
      });

      it('should return the "smallest" number', () => {
        const result = getSmallestNumber([-10, -5, -1, -100, -50]);
        expect(result).toBe(-100);
      });
    });

    describe('and array contains only positive numbers', () => {
      it('should return correct value', () => {
        const result = getSmallestNumber([200, 25, 4, 123, 87]);
        expect(result).toBe(4);
      });
    });

    describe('and array contains decimal numbers', () => {
      it('should return the smallest decimal', () => {
        const result = getSmallestNumber([1.5, 2.7, 0.3, 1.9]);
        expect(result).toBe(0.3);
      });

      it('should handle negative decimals', () => {
        const result = getSmallestNumber([1.1, -2.5, 0.8, -1.2]);
        expect(result).toBe(-2.5);
      });
    });

    describe('and array has single element', () => {
      it('should return the single negative number', () => {
        const result = getSmallestNumber([-15]);
        expect(result).toBe(-15);
      });
    });

    describe('and array has duplicate numbers', () => {
      it('should return the smallest when duplicates exist', () => {
        const result = getSmallestNumber([5, 2, 8, 2, 1, 1]);
        expect(result).toBe(1);
      });
    });
  });

  describe('when provided with invalid inputs', () => {
    describe('and input is not an array', () => {
      it('should throw error for null', () => {
        expect(() => getSmallestNumber(null)).toThrow('Input must be an array');
      });

      it('should throw error for undefined', () => {
        expect(() => getSmallestNumber(undefined)).toThrow('Input must be an array');
      });

      it('should throw error for string', () => {
        expect(() => getSmallestNumber('123')).toThrow('Input must be an array');
      });

      it('should throw error for number', () => {
        expect(() => getSmallestNumber(123)).toThrow('Input must be an array');
      });

      it('should throw error for object', () => {
        expect(() => getSmallestNumber({})).toThrow('Input must be an array');
      });

      it('should throw error for boolean', () => {
        expect(() => getSmallestNumber(true)).toThrow('Input must be an array');
      });
    });

    describe('and array is empty', () => {
      it('should throw error for empty array', () => {
        expect(() => getSmallestNumber([])).toThrow('Array cannot be empty');
      });
    });

    describe('and array contains non-numeric values', () => {
      it('should throw error for array with strings', () => {
        expect(() => getSmallestNumber([1, '2', 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with null', () => {
        expect(() => getSmallestNumber([1, null, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with undefined', () => {
        expect(() => getSmallestNumber([1, undefined, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with boolean', () => {
        expect(() => getSmallestNumber([1, true, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with objects', () => {
        expect(() => getSmallestNumber([1, {}, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with arrays', () => {
        expect(() => getSmallestNumber([1, [2], 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with NaN', () => {
        expect(() => getSmallestNumber([1, NaN, 3])).toThrow('All array elements must be valid numbers');
      });
    });
  });

  it('should not mutate the original array', () => {
    const originalArray = [5, 2, 8, 1, 9];
    const arrayClone = [...originalArray];

    getSmallestNumber(originalArray);

    expect(originalArray).toEqual(arrayClone);
    expect(originalArray.length).toBe(arrayClone.length);
  });
}); 