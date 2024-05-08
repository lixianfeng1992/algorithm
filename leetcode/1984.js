var minimumDifference = function(nums, k) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n - k + 1; i++) {
      ans = Math.min(ans, nums[i + k - 1] - nums[i]);
  }
  return ans;
};

console.log(minimumDifference([9,4,1,7], 2))
