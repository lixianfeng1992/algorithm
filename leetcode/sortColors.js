var sortColors = function(nums) {
  let p0 = 0, p2 = nums.length - 1, i = 0;
  while (i <= p2) {
    if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      p0++;
      i++;
    } else if (nums[i] === 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      p2--;
    } else {
      i++;
    }
  }
  return nums;
};

const res = sortColors([2,0,2,1,1,0])
console.log(res);
