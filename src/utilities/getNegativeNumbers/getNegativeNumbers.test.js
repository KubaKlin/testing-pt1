import { getNegativeNumbers } from './getNegativeNumbers';

describe('getNegativeNumbers()', () => {
  describe('when provided with valid array of numbers', () => {
    describe('and array contains mixed positive and negative numbers', () => {
      it('should return correct value', () => {
        const result = getNegativeNumbers([1, -5, -3, 12, -152]);
        expect(result).toEqual([-5, -3, -152]);
      });
    });

    describe('and array contains only positive numbers', () => {
      it('should return empty array when all numbers are positive', () => {
        const result = getNegativeNumbers([1, 2, 3, 4, 5]);
        expect(result).toEqual([]);
      });
    });

    describe('and array contains decimal numbers', () => {
      it('should filter negative decimals correctly', () => {
        const result = getNegativeNumbers([1.5, -2.5, 3.7, -4.2, 0.1]);
        expect(result).toEqual([-2.5, -4.2]);
      });
    });

    describe('and array is empty', () => {
      it('should return empty array for empty input', () => {
        const result = getNegativeNumbers([]);
        expect(result).toEqual([]);
      });
    });

    describe('and array has duplicate numbers', () => {
      it('should include all duplicate negative numbers', () => {
        const result = getNegativeNumbers([-1, -1, 2, -3, -3, 4]);
        expect(result).toEqual([-1, -1, -3, -3]);
      });
    });
  });

  describe('when provided with invalid inputs', () => {
    describe('and input is not an array', () => {
      it('should throw error for null', () => {
        expect(() => getNegativeNumbers(null)).toThrow('Input must be an array');
      });

      it('should throw error for undefined', () => {
        expect(() => getNegativeNumbers(undefined)).toThrow('Input must be an array');
      });

      it('should throw error for string', () => {
        expect(() => getNegativeNumbers('123')).toThrow('Input must be an array');
      });

      it('should throw error for number', () => {
        expect(() => getNegativeNumbers(123)).toThrow('Input must be an array');
      });

      it('should throw error for object', () => {
        expect(() => getNegativeNumbers({})).toThrow('Input must be an array');
      });

      it('should throw error for boolean', () => {
        expect(() => getNegativeNumbers(true)).toThrow('Input must be an array');
      });
    });

    describe('and array contains non-numeric values', () => {
      it('should throw error for array with strings', () => {
        expect(() => getNegativeNumbers([1, '2', 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with null', () => {
        expect(() => getNegativeNumbers([1, null, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with undefined', () => {
        expect(() => getNegativeNumbers([1, undefined, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with boolean', () => {
        expect(() => getNegativeNumbers([1, true, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with objects', () => {
        expect(() => getNegativeNumbers([1, {}, 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with arrays', () => {
        expect(() => getNegativeNumbers([1, [2], 3])).toThrow('All array elements must be valid numbers');
      });

      it('should throw error for array with NaN', () => {
        expect(() => getNegativeNumbers([1, NaN, 3])).toThrow('All array elements must be valid numbers');
      });
    });
  });

  it('should not mutate the original array', () => {
    const originalArray = [1, -5, -3, 12, -152];
    const arrayClone = [...originalArray];

    getNegativeNumbers(originalArray);

    expect(originalArray).toEqual(arrayClone);
    expect(originalArray.length).toBe(arrayClone.length);
  });
});