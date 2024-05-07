var maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] <= 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = nums[i] + dp[i - 1];
    }
  }
  let max = dp[0]
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i])
  }
  return max;
};

const ans = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(ans)
