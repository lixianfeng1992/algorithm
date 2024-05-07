var generate = function(numRows) {
  const res = []
  let n = 1;
  while (n <= numRows) {
    const row = Array.from({length: n}).fill(1);
    const pre = res[n - 2];
    for (let i = 0; i < n; i++) {
      if (i === 0 || i === n - 1) {
        row[i] = 1;
      } else {
        row[i] = pre[i - 1] + pre[i];
      }
    }
    res.push(row);
    n++;
  }
  return res
};
generate(5)
