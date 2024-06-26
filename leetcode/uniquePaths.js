// dp[m][n] = dp[m][n - 1] + dp[m -1][n]
var uniquePaths = function(m, n) {
  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[m - 1][n - 1];
};

const res = uniquePaths(3, 7);
console.log(res);
