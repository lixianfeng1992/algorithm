var getAverages = function(nums, k) {
  const n = nums.length;
  const ans = Array.from({ length: n }, () => -1);
  let sum = 0;
  for (let i = 0; i < 2 * k + 1; i++) {
    sum += nums[i];
  }
  for (let i = k; i < n - k; i++) {
    if (i !== k) {
      sum += nums[i + k] - nums[i - k - 1];
    }
    ans[i] = parseInt(sum / (2 * k + 1));
  }
  return ans;
};

console.log(getAverages([7,4,3,9,1,8,5,2,6], 3))
