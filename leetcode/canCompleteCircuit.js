var canCompleteCircuit = function(gas, cost) {
  const n = gas.length;
  let i = 0;
  while (i < n) {
    let sumOfGas = 0, sumOfCost = 0;
    let cnt = 0;
    while (cnt < n) {
      const j = (i + cnt) % n;
      sumOfGas += gas[j];
      sumOfCost += cost[j];
      if (sumOfCost > sumOfGas) {
        break;
      }
      cnt++;
    }
    if (cnt === n) {
      return i
    } else {
      i = i + cnt + 1;
    }
  }
  return -1;
};

const res = canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])
console.log(res)
