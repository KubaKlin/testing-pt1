import {getDayOfTheWeek} from './getDayOfTheWeek';

describe('getDayOfTheWeek()', () => {
  describe('when provided with invalid day numbers', () => {
    it('should return undefined for negative numbers', () => {
      const dayOfTheWeek = getDayOfTheWeek(-1);
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for numbers greater than 6', () => {
      const dayOfTheWeek = getDayOfTheWeek(7);
      expect(dayOfTheWeek).toBeUndefined();
    });
  });

  describe('when provided with edge case inputs', () => {
    it('should return undefined for null', () => {
      const dayOfTheWeek = getDayOfTheWeek(null);
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for undefined', () => {
      const dayOfTheWeek = getDayOfTheWeek(undefined);
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for string input', () => {
      const dayOfTheWeek = getDayOfTheWeek('2');
      expect(dayOfTheWeek).toBe('Wednesday');
    });

    it('should return undefined for boolean input', () => {
      const dayOfTheWeek = getDayOfTheWeek(true);
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for object input', () => {
      const dayOfTheWeek = getDayOfTheWeek({});
      expect(dayOfTheWeek).toBeUndefined();
    });

    it('should return undefined for array input', () => {
      const dayOfTheWeek = getDayOfTheWeek([]);
      expect(dayOfTheWeek).toBeUndefined();
    });
  });

  describe('when provided with decimal numbers', () => {
    it('should return "Monday" for 0.5 (array access with decimal)', () => {
      const dayOfTheWeek = getDayOfTheWeek(0.5);
      expect(dayOfTheWeek).toBeUndefined();
    });
  });

  describe('when testing all valid inputs systematically', () => {
    const expectedDays = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
    ];

    expectedDays.forEach((expectedDay, index) => {
      it(`should return "${expectedDay}" for day number ${index}`, () => {
        const dayOfTheWeek = getDayOfTheWeek(index);
        expect(dayOfTheWeek).toBe(expectedDay);
      });
    });
  });
});
