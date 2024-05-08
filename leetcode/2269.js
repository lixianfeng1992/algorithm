var divisorSubstrings = function(num, k) {
  const numStr = `${num}`;
  const n = numStr.length;
  let ans = 0;
  for (let i = k - 1; i < n; i++) {
    const subStr = +numStr.slice(i - k + 1, i + 1);
    if (num % subStr === 0) {
      ans += 1;
    }
  }
  return ans;
};

console.log(divisorSubstrings(240, 2))
