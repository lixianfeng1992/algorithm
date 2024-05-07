var firstMissingPositive = function(nums) {
  let i = 0, n = nums.length;
  while (i < n) {
    if (nums[i] <= 0 || nums[i] - 1 > n) {
      i++;
      continue;
    }
    if (i !== nums[i] - 1 && nums[nums[i] - 1] !== nums[i]) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    } else {
      i++;
    }
  }
  for (let i = 0; i < n; i++) {
    if (i !== nums[i] - 1) {
      return i + 1
    }
  }
  return n + 1;
};

const res = firstMissingPositive([1,2,0])
console.log(res)
