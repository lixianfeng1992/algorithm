var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const hash1 = new Map();
  let ans = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      hash1.set(sum, (hash1.get(sum) || 0) + 1);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = -nums3[i] - nums4[j];
      if (hash1.get(sum)) {
        ans += hash1.get(sum);
      }
    }
  }
  return ans;
};

console.log(fourSumCount([-1,1,1,1,-1], [0,-1,-1,0,1], [-1,-1,1,-1,-1], [0,1,0,-1,-1]))
