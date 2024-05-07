var rotate = function(nums, k) {
  const step = k % nums.length;
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, step - 1)
  reverse(nums, step, nums.length - 1)
  console.log(nums)
};

var reverse = function(nums, i, j) {
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}

rotate([1,2,3,4,5,6,7], 8)
