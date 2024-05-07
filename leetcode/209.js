var minSubArrayLen = function(target, nums) {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let ans = Number.MAX_SAFE_INTEGER, start = 0, end = 0, sum = 0;
  while (end < n) {
    sum += nums[end];
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};

minSubArrayLen(6, [3,4,1,2])
