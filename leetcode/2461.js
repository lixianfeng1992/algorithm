var maximumSubarraySum = function(nums, k) {
  const counter = new Map();
  let ans = 0, sum = 0;
  for (let i = 0; i < k; i++) {
    counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
    sum += nums[i];
  }
  if (counter.size === k) {
    ans = Math.max(ans, sum);
  }
  for (let i = k; i < nums.length; i++) {
    counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
    counter.set(nums[i - k], (counter.get(nums[i - k]) || 0) - 1);
    if (counter.get(nums[i - k]) === 0) {
      counter.delete(nums[i - k]);
    }
    sum += nums[i] - nums[i - k];
    if (counter.size === k) {
      ans = Math.max(ans, sum);
    }
  }
  return ans;
};

console.log(maximumSubarraySum([4,4,4], 3))
