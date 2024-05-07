var permute = function(nums) {
  const ans = [];
  var backtrace = function(tmp, candidates) {
    if (candidates.length === 0) {
      ans.push(tmp);
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      backtrace([...tmp, candidates[i]], candidates.slice(0, i).concat(candidates.slice(i + 1)));
    }
  }
  backtrace([], nums);
  return ans;
}

permute([1,2,3])
