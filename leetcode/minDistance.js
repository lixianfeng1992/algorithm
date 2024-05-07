// dp[i][j] = min(dp[i][j - 1] + 1, )
var minDistance = function(word1, word2) {
  const n = word1.length;
  const m = word2.length;

  if (m * n === 0) {
      return n + m;
  }
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));
  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < m + 1; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1])
      }
    }
  }
  return dp[n][m];
};

const res = minDistance("a", "b");
console.log(res)
