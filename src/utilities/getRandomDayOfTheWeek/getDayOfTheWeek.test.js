import {getDayOfTheWeek} from './getDayOfTheWeek';

describe('getDayOfTheWeek()', () => {
  describe('when provided with number between 0-6', () => {
    it('should return valid day of week', () => {
      const dayOfTheWeek = getDayOfTheWeek(0);
      expect(dayOfTheWeek).toBe('Monday');
    })
  })
})
