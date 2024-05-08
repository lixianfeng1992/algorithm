var findMaxAverage = function(nums, k) {
  let tmp = 0;
  for (let i = 0; i < k; i++) {
    tmp += nums[i];
  }
  let max = tmp;
  for (let i = k; i < nums.length; i++) {
    tmp += nums[i] - nums[i - k];
    max = Math.max(max, tmp);
  }

  return max / k;
};

console.log(findMaxAverage([0,4,0,3,2], 1))
