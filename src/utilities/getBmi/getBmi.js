export const getBmi = (weight, height) => {
  if (typeof weight !== 'number' || typeof height !== 'number') {
    return 'Weight and height must be numbers';
  }
  
  if (weight <= 0 || height <= 0) {
    return 'Weight and height must be positive numbers';
  }
  
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return 'underweight';
  }
  
  if (bmi < 25) {
    return 'normal weight';
  }
  
  if (bmi < 30) {
    return 'overweight';
  }
  
  return 'obese';
};