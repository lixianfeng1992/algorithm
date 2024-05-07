var intersection = function(nums1, nums2) {
  const hash = {};
  for (let num of nums1) {
    hash[num] = hash[num] || 1
  }
  for (let num of nums2) {
    if (hash[num] === 1) {
      hash[num] = 0;
    }
  }
  const ans = [];
  for (let key in hash) {
    if (hash[key] === 0) {
      ans.push(key);
    }
  }
  return ans;
};

console.log(intersection([4,9,5], [9,4,9,8,4]))
