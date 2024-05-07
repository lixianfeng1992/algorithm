var removeElement = function(nums, val) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right -= 1;
    } else {
      left += 1;
    }
  }
  return right + 1;
};

const res = removeElement([3,3,3,3], 3)
console.log(res)
