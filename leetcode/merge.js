var merge = function(intervals) {
  const ans = [];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let idx = -1;
  for (let interval of intervals) {
    if (idx === -1 || interval[0] > (ans[idx]?.[1] ?? 0)) {
      ans[++idx] = interval;
    } else {
      ans[idx][1] = Math.max(ans[idx][1], interval[1]);
    }
  }
  return ans;
};

const res = merge([[1,3],[2,6],[8,10],[15,18]])
console.log(res);
