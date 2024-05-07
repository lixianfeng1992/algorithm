var isHappy = function(n) {
  let slow = n, fast = squareSum(n);
  while (slow !== fast) {
    slow = squareSum(slow);
    fast = squareSum(squareSum(fast));
  }
  return slow === 1;
};

var squareSum = function(n) {
  let sum = 0;
  while (n > 0) {
    const digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}
