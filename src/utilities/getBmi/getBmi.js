export const getBmi = (weight, height) => {

  if (typeof weight !== 'number' || typeof height !== 'number') {
    return 'Weight and height must be numbers';
  }
  
  if (weight <= 0 || height <= 0) {
    return 'Weight and height must be positive numbers'
  }
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return 'underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return 'normal weight';  
  } else if (bmi >= 25 && bmi <= 29.9) {
    return 'overweight';
  } else {
    return 'obese';
  }
};