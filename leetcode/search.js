var search = function(nums, target) {
  let lo = 0, hi = nums.length - 1;
  while (lo <= hi) {
    let mid = lo + (hi - lo) / 2;
    if (nums[mid] === target) {
      return mid;
    }
    if (target > nums[0]) {
      if (nums[mid] < nums[0]) {
        nums[mid] = Number.MAX_SAFE_INTEGER;
      }
    } else {
      if (nums[mid] >= nums[0]) {
        nums[mid] = Number.MIN_SAFE_INTEGER;
      }
    }
    if (nums[mid] < target) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
};
