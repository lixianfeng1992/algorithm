var nextPermutation = function(nums) {
  let i = nums.length - 2, j = nums.length - 1, k = nums.length - 1;
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }

  if (i >= 0) {
    while (nums[i] >= nums[k]) {
      k--;
    }
    const tmp = nums[i];
    nums[i] = nums[k];
    nums[k] = tmp;
  }

  for (i = j, j = nums.length - 1; i < j; i++, j--) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }

  return nums
};

nextPermutation([1,2,3,8,5,7,6,4])
