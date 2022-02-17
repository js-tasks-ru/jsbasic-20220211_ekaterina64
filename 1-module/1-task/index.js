/*
  Function for evaluation of positive number factorial.
  n! = n * (n - 1) * (n - 2) * ...*1
  Examples:
  0! = 1
  1! = 1
  2! = 2 * 1 = 2
  3! = 3 * 2 * 1 = 6
  4! = 4 * 3 * 2 * 1 = 24
  5! = 5 * 4 * 3 * 2 * 1 = 120
*/
function factorial(n) {
  if (n < 0) {
    throw "Fuction is defined only for positive numbers.";
  }
  if (n != 0) {
    let result = n;
    for (let i = 1; i < n; i++) {
      result *= n - i;
    }
    return result;
  }
  return 1;
}
