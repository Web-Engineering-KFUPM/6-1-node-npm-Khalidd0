export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
}

export function multiply(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}

export function divide(numbers) {
  return numbers.slice(1).reduce((acc, num) => {
    if (num === 0) {
      console.log("Error: Cannot divide by zero");
      return NaN;
    }
    return acc / num;
  }, numbers[0]);
}
