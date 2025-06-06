import { isEven } from './isEven';

describe('isEven()', () => {
  describe('when provided with valid numbers', () => {
    describe('when provided number is even', () => {
      it('should return true', () => {
        const result = isEven(4);
        expect(result).toBe(true);
      });

      it('should return true for zero', () => {
        const result = isEven(0);
        expect(result).toBe(true);
      });

      it('should return true for negative even numbers', () => {
        const result = isEven(-4);
        expect(result).toBe(true);
      });
    });

    describe('when provided number is odd', () => {
      it('should return false', () => {
        const result = isEven(5);
        expect(result).toBe(false);
      });

      it('should return false for one', () => {
        const result = isEven(1);
        expect(result).toBe(false);
      });

      it('should return false for negative odd numbers', () => {
        const result = isEven(-3);
        expect(result).toBe(false);
      });
    });

    describe('when provided with decimal numbers', () => {
      it('should return true for even decimals', () => {
        const result = isEven(4.0);
        expect(result).toBe(true);
      });

      it('should return false for odd decimals', () => {
        const result = isEven(5.0);
        expect(result).toBe(false);
      });

      it('should return false for fractional numbers', () => {
        const result = isEven(4.5);
        expect(result).toBe(false);
      });
    });
  });

  describe('when provided with invalid inputs', () => {
    it('should return undefined for null', () => {
      const result = isEven(null);
      expect(result).toBeUndefined();
    });

    it('should return undefined for undefined', () => {
      const result = isEven(undefined);
      expect(result).toBeUndefined();
    });

    it('should return undefined for string input', () => {
      const result = isEven('2');
      expect(result).toBeUndefined();
    });

    it('should return undefined for boolean input', () => {
      const result = isEven(true);
      expect(result).toBeUndefined();
    });

    it('should return undefined for object input', () => {
      const result = isEven({});
      expect(result).toBeUndefined();
    });

    it('should return undefined for array input', () => {
      const result = isEven([]);
      expect(result).toBeUndefined();
    });

    it('should return undefined for NaN', () => {
      const result = isEven(NaN);
      expect(result).toBeUndefined();
    });

    it('should return undefined for Infinity', () => {
      const result = isEven(Infinity);
      expect(result).toBeUndefined();
    });

    it('should return undefined for -Infinity', () => {
      const result = isEven(-Infinity);
      expect(result).toBeUndefined();
    });
  });
});