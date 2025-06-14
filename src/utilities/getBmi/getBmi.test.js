import { getBmi } from './getBmi';

describe('getBmi()', () => {
  describe('when provided with valid weight and height', () => {
    describe('and BMI is underweight (under 18.5)', () => {
      it('should return correct value', () => {
        const result = getBmi(55, 1.73);
        expect(result).toBe('underweight');
      });
    });

    describe('and BMI is normal weight (18.5 to 24.9)', () => {
      it('should return correct value', () => {
        const result = getBmi(70, 1.75);
        expect(result).toBe('normal weight');
      });
    });

    describe('and BMI is overweight (25 to 29.9)', () => {
      it('should return correct value', () => {
        const result = getBmi(85, 1.75);
        expect(result).toBe('overweight');
      });
    });

    describe('and BMI is obese (30 or more)', () => {
      it('should return correct value', () => {
        const result = getBmi(120, 1.75);
        expect(result).toBe('obese');
      });
    });
  });

  describe('when provided with invalid inputs', () => {
    describe('and weight or height is not a number', () => {
      it('should throw error for string weight', () => {
        const result = getBmi('70', 1.75);
        expect(result).toBe('Weight and height must be numbers');
      });

      it('should throw error for string height', () => {
        const result = getBmi(70, '1.75');
        expect(result).toBe('Weight and height must be numbers');
      });
    });

    describe('and weight or height is not positive', () => {
      it('should throw error for zero weight', () => {
        const result = getBmi(0, 1.75);
        expect(result).toBe('Weight and height must be positive numbers');
      });

      it('should throw error for negative weight', () => {
        const result = getBmi(50, -1.75);
        expect(result).toBe('Weight and height must be positive numbers');
      });
    });
  });
});