import { isElementInArray } from './isElementInArray';

describe('The isElementInArray', () => {
  describe('when provided with a valid array of strings', () => {
    let array;

    beforeEach(() => {
      array = ['orange', 'banana', 'strawberry'];
    });

    describe('and the desired element is not in the array', () => {
      it('should return true', () => {
        const result = isElementInArray(array, 'coconut');
        expect(result).toBe(false);
      });
    });
    describe('and the desired element is in the array', () => {
      it('should return true', () => {
        const result = isElementInArray(array, 'strawberry');
        expect(result).toBe(true);
      });
    });
  });
  describe('when provided with a valid array of strings', () => {
    let numbersArray;

    beforeEach(() => {
      numbersArray = [3, 4, 5];
    });

    describe('and the desired element is not in the array', () => {
      it('should return true', () => {
        const result = isElementInArray(numbersArray, 9);
        expect(result).toBe(false);
      });
    });

    describe('and the desired element is in the array', () => {
      it('should return true', () => {
        const result = isElementInArray(numbersArray, 5);
        expect(result).toBe(true);
      });
    });
  });
});
