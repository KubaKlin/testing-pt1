import { isEven } from './isEven';

describe('isEven()', () => {

  describe('when provided with valid variable', () => {
    describe('when provided variable is even', () => {
      it('should return true', () => {
        const result = isEven(4);
        expect(result).toBe(true);
      });
    });
    describe('when provided variable is not even', () => {
      it('should return true', () => {
        const result = isEven(5);
        expect(result).toBe(false);
      });
    });
  });

  describe('when provided with invalid variable', () => {
    it('should return undefined for null', () => {
      const dayOfTheWeek = isEven(null);
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for undefined', () => {
      const dayOfTheWeek = isEven(undefined);
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for string input', () => {
      const dayOfTheWeek = isEven('2');
      expect(dayOfTheWeek).toBe('Wednesday');
    });

    it('should return undefined for boolean input', () => {
      const dayOfTheWeek = isEven(true);
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for object input', () => {
      const dayOfTheWeek = isEven({});
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for array input', () => {
      const dayOfTheWeek = isEven([]);
      expect(dayOfTheWeek).toBeUndefined();
    });
  });
})