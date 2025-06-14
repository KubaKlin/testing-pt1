import { findUserWithFullName } from './findUserWithFullName';

describe('findUserWithFullName function', () => {
  let usersArray;

  beforeEach(() => {
    usersArray = [
      {
        firstName: 'John',
        lastName: 'Smith',
        heightInCm: 184
      },
      {
        firstName: 'Kate',
        lastName: 'Williams',
        heightInCm: 169
      },
      {
        firstName: 'Mike',
        lastName: 'Johnson',
        heightInCm: 175,
      },
      {
        firstName: 'Sarah',
        lastName: 'Davis',
        heightInCm: 162,
      }
    ];
  });

  describe('when provided with valid users array and full name', () => {
    describe('and user exists in the array', () => {
      it('should return correct object', () => {
        const result = findUserWithFullName(usersArray, 'Kate Williams');
        expect(result).toEqual({
          firstName: 'Kate',
          lastName: 'Williams',
          heightInCm: 169
        });
        expect(result.heightInCm).toBe(169);
      });
    });

    describe('and user does not exist in the array', () => {
      it('should return undefined for non-existent user', () => {
        const result = findUserWithFullName(usersArray, 'Bob Wilson');
        expect(result).toBeUndefined();
      });
    });

    describe('and array is empty', () => {
      it('should return undefined for empty array', () => {
        const result = findUserWithFullName([], 'Kate Williams');
        expect(result).toBeUndefined();
      });
    });

    describe('and array contains users with same names', () => {
      let usersWithDuplicates;

      beforeEach(() => {
        usersWithDuplicates = [
          ...usersArray,
          {
            firstName: 'John',
            lastName: 'Smith',
            heightInCm: 190,
          }
        ];
      });

      it('should return the first matching user', () => {
        const result = findUserWithFullName(usersWithDuplicates, 'John Smith');
        expect(result).toEqual({
          firstName: 'John',
          lastName: 'Smith',
          heightInCm: 184
        });
        expect(result.heightInCm).toBe(184);
      });
    });
  });

  describe('when provided with invalid inputs', () => {
    describe('and users parameter is not an array', () => {
      it('should throw error for null', () => {
        expect(() => findUserWithFullName(null, 'Kate Williams')).toThrow('Users must be an array');
      });

      it('should throw error for undefined', () => {
        expect(() => findUserWithFullName(undefined, 'Kate Williams')).toThrow('Users must be an array');
      });

      it('should throw error for string', () => {
        expect(() => findUserWithFullName('users', 'Kate Williams')).toThrow('Users must be an array');
      });

      it('should throw error for object', () => {
        expect(() => findUserWithFullName({}, 'Kate Williams')).toThrow('Users must be an array');
      });

      it('should throw error for number', () => {
        expect(() => findUserWithFullName(123, 'Kate Williams')).toThrow('Users must be an array');
      });
    });

    describe('and fullName parameter is not a string', () => {
      it('should throw error for null', () => {
        expect(() => findUserWithFullName(usersArray, null)).toThrow('Full name must be a string');
      });

      it('should throw error for undefined', () => {
        expect(() => findUserWithFullName(usersArray, undefined)).toThrow('Full name must be a string');
      });

      it('should throw error for number', () => {
        expect(() => findUserWithFullName(usersArray, 123)).toThrow('Full name must be a string');
      });

      it('should throw error for boolean', () => {
        expect(() => findUserWithFullName(usersArray, true)).toThrow('Full name must be a string');
      });

      it('should throw error for object', () => {
        expect(() => findUserWithFullName(usersArray, {})).toThrow('Full name must be a string');
      });

      it('should throw error for array', () => {
        expect(() => findUserWithFullName(usersArray, ['Kate', 'Williams'])).toThrow('Full name must be a string');
      });
    });

    describe('and fullName is empty or whitespace', () => {
      it('should throw error for empty string', () => {
        expect(() => findUserWithFullName(usersArray, '')).toThrow('Full name cannot be empty');
      });

      it('should throw error for whitespace only', () => {
        expect(() => findUserWithFullName(usersArray, '   ')).toThrow('Full name cannot be empty');
      });

      it('should throw error for tab characters', () => {
        expect(() => findUserWithFullName(usersArray, '\t\t')).toThrow('Full name cannot be empty');
      });
    });

    describe('and array contains invalid user objects', () => {
      let invalidUsers;

      beforeEach(() => {
        invalidUsers = [];
      });

      it('should throw error for array with null', () => {
        invalidUsers = [usersArray[0], null, usersArray[1]];
        expect(() => findUserWithFullName(invalidUsers, 'Kate Williams')).toThrow('All array elements must be valid user objects');
      });

      it('should throw error for array with primitive values', () => {
        invalidUsers = [usersArray[0], 'invalid', usersArray[1]];
        expect(() => findUserWithFullName(invalidUsers, 'Kate Williams')).toThrow('All array elements must be valid user objects');
      });

      it('should throw error for array with arrays', () => {
        invalidUsers = [usersArray[0], ['John', 'Smith'], usersArray[1]];
        expect(() => findUserWithFullName(invalidUsers, 'Kate Williams')).toThrow('All array elements must be valid user objects');
      });

      it('should throw error for missing firstName', () => {
        invalidUsers = [
          usersArray[0], 
          { lastName: 'Williams', heightInCm: 169 }, 
          usersArray[1]
        ];
        expect(() => findUserWithFullName(invalidUsers, 'Kate Williams')).toThrow('All users must have firstName and lastName as strings');
      });

      it('should throw error for non-string firstName', () => {
        invalidUsers = [
          usersArray[0], 
          { firstName: 123, lastName: 'Williams', heightInCm: 169 }, 
          usersArray[1]
        ];
        expect(() => findUserWithFullName(invalidUsers, 'Kate Williams')).toThrow('All users must have firstName and lastName as strings');
      });
    });
  });

  describe('when checking if the original array is not mutated', () => {
    let originalUsers;

    beforeEach(() => {
      originalUsers = [...usersArray];
    });

    it('should not mutate the original users array', () => {
      findUserWithFullName(usersArray, 'Kate Williams');
      
      expect(usersArray).toEqual(originalUsers);
      expect(usersArray.length).toBe(originalUsers.length);
    });
  });
}); 