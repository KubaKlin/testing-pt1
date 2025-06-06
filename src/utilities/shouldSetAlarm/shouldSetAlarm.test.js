import { shouldSetAlarm } from './shouldSetAlarm';

describe('shouldSetAlarm()', () => {
  describe('when provided with valid options', () => {
    describe('and person is employed and not on vacation', () => {
      it('should return true', () => {
        const result = shouldSetAlarm({
          isEmployed: true,
          isOnVacation: false
        });
        expect(result).toBe(true);
      });
    });

    describe('and person is employed but on vacation', () => {
      it('should return false', () => {
        const result = shouldSetAlarm({
          isEmployed: true,
          isOnVacation: true
        });
        expect(result).toBe(false);
      });
    });

    describe('and person is not employed and not on vacation', () => {
      it('should return false', () => {
        const result = shouldSetAlarm({
          isEmployed: false,
          isOnVacation: false
        });
        expect(result).toBe(false);
      });
    });

    describe('and person is not employed but on vacation', () => {
      it('should return false', () => {
        const result = shouldSetAlarm({
          isEmployed: false,
          isOnVacation: true
        });
        expect(result).toBe(false);
      });
    });
  });

  describe('when provided with invalid options parameter', () => {
    it('should throw error for null', () => {
      expect(() => shouldSetAlarm(null)).toThrow('Options must be a valid object');
    });

    it('should throw error for undefined', () => {
      expect(() => shouldSetAlarm(undefined)).toThrow('Options must be a valid object');
    });

    it('should throw error for string', () => {
      expect(() => shouldSetAlarm('invalid')).toThrow('Options must be a valid object');
    });

    it('should throw error for number', () => {
      expect(() => shouldSetAlarm(123)).toThrow('Options must be a valid object');
    });

    it('should throw error for array', () => {
      expect(() => shouldSetAlarm([true, false])).toThrow('Options must be a valid object');
    });

    it('should throw error for boolean', () => {
      expect(() => shouldSetAlarm(true)).toThrow('Options must be a valid object');
    });
  });

  describe('when provided with invalid isEmployed property', () => {
    it('should throw error for missing isEmployed', () => {
      expect(() => shouldSetAlarm({ isOnVacation: false })).toThrow('isEmployed must be a boolean');
    });

    it('should throw error for string isEmployed', () => {
      expect(() => shouldSetAlarm({
        isEmployed: 'true',
        isOnVacation: false
      })).toThrow('isEmployed must be a boolean');
    });

    it('should throw error for number isEmployed', () => {
      expect(() => shouldSetAlarm({
        isEmployed: 1,
        isOnVacation: false
      })).toThrow('isEmployed must be a boolean');
    });

    it('should throw error for null isEmployed', () => {
      expect(() => shouldSetAlarm({
        isEmployed: null,
        isOnVacation: false
      })).toThrow('isEmployed must be a boolean');
    });
  });

  describe('when provided with invalid isOnVacation property', () => {
    it('should throw error for missing isOnVacation', () => {
      expect(() => shouldSetAlarm({ isEmployed: true })).toThrow('isOnVacation must be a boolean');
    });

    it('should throw error for string isOnVacation', () => {
      expect(() => shouldSetAlarm({
        isEmployed: true,
        isOnVacation: 'false'
      })).toThrow('isOnVacation must be a boolean');
    });

    it('should throw error for number isOnVacation', () => {
      expect(() => shouldSetAlarm({
        isEmployed: true,
        isOnVacation: 0
      })).toThrow('isOnVacation must be a boolean');
    });

    it('should throw error for undefined isOnVacation', () => {
      expect(() => shouldSetAlarm({
        isEmployed: true,
        isOnVacation: undefined
      })).toThrow('isOnVacation must be a boolean');
    });
  });

  describe('when provided with extra properties', () => {
    it('should ignore extra properties and work correctly', () => {
      const result = shouldSetAlarm({
        isEmployed: true,
        isOnVacation: false,
        extraProperty: 'ignored',
        anotherProperty: 123
      });
      expect(result).toBe(true);
    });
  });
});
