export const findUserWithFullName = (users, fullName) => {
  if (!Array.isArray(users)) {
    throw new Error('Users must be an array');
  }

  if (typeof fullName !== 'string') {
    throw new Error('Full name must be a string');
  }

  if (fullName.trim() === '') {
    throw new Error('Full name cannot be empty');
  }

  // Validate that all elements are user objects
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (!user || typeof user !== 'object' || Array.isArray(user)) {
      throw new Error('All array elements must be valid user objects');
    }
    if (typeof user.firstName !== 'string' || typeof user.lastName !== 'string') {
      throw new Error('All users must have firstName and lastName as strings');
    }
  }

  return users.find(user => {
    const userFullName = `${user.firstName} ${user.lastName}`;
    return userFullName === fullName.trim();
  });
}; 