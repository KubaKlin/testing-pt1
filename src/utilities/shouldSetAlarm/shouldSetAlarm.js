export const shouldSetAlarm = (options) => {
  if (!options || typeof options !== 'object' || Array.isArray(options)) {
    throw new Error('Options must be a valid object');
  }

  const { isEmployed, isOnVacation } = options;

  if (typeof isEmployed !== 'boolean') {
    throw new Error('isEmployed must be a boolean');
  }

  if (typeof isOnVacation !== 'boolean') {
    throw new Error('isOnVacation must be a boolean');
  }

  return isEmployed && !isOnVacation;
};