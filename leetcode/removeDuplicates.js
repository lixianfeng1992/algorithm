var removeDuplicates = function(nums) {
  const k = 2;
  let j = 0;
  for (let i in nums) {
    if (i < k || nums[j - 2] !== nums[i]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};


removeDuplicates([1,1,1,2,2,3])
