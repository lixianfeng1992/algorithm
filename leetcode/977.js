var sortedSquares = function(nums) {
  const ans = [];
  let left = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      left = i;
    } else {
      break;
    }
  }
  let right = left + 1;
  while (left >= 0 || right <= nums.length - 1) {
    if (left < 0) {
      ans.push(nums[right] * nums[right]);
      right++;
    } else if (right > nums.length - 1) {
      ans.push(nums[left] * nums[left]);
      left--;
    } else {
      if (Math.abs(nums[left]) < Math.abs(nums[right])) {
        ans.push(nums[left] * nums[left]);
        left--;
      } else {
        ans.push(nums[right] * nums[right]);
        right++;
      }
    }
  }
  return ans;
};

sortedSquares([-4,-1,0,3,10])
