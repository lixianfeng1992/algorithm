var subsets = function(nums) {
  const ans = []
  var backtrack = function(index, tmp) {
    ans.push(tmp)
    for (let i = index; i < nums.length; i++) {
      backtrack(i + 1, tmp.concat([nums[i]]))
    }
  }
  backtrack(0, [])
  return ans
};

const res = subsets([1, 2, 3])
