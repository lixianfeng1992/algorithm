var maxSatisfied = function(customers, grumpy, minutes) {
  let increment = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      increment += customers[i];
    }
  }
  let maxIncrement = increment;
  for (let i = minutes; i < grumpy.length; i++) {
    if (grumpy[i] === 1) {
      increment += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      increment -= customers[i - minutes];
    }
    maxIncrement = Math.max(maxIncrement, increment);
  }
  let ans = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      ans += customers[i];
    }
  }
  return ans + maxIncrement;
};

console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3))
