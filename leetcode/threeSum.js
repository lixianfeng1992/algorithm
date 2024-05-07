var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  const ans = [];
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k] === nums[k - 1]) continue;
    let i = k + 1, j = nums.length - 1;
    while (i < j) {
      const sum = nums[k] + nums[i] + nums[j];
      if (sum < 0) {
        while(i < j && nums[i] === nums[++i]);
      } else if (sum > 0) {
        while(i < j && nums[j] === nums[--j]);
      } else {
        ans.push([nums[k], nums[i], nums[j]]);
        while(i < j && nums[i] === nums[++i]);
        while(i < j && nums[j] === nums[--j]);
      }
    }
  }
  return ans;
};

threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4])
