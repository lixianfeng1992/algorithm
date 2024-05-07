var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let n = candidates.length;
  let res = [];
  var backtrack = function(i, tmp_sum, tmp) {
    if (tmp_sum > target || i === n) {
      return;
    }
    if (tmp_sum === target) {
      res.push(tmp);
      return
    }
    for (let j = i; j < n; j++) {
      if (tmp_sum + candidates[j] > target) {
        break;
      }
      backtrack(j, tmp_sum + candidates[j], tmp.concat([candidates[j]]));
    }
  }
  backtrack(0, 0, []);
  return res;
};

combinationSum([2,3,6,7], 7)
