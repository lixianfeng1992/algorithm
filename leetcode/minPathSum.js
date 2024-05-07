// dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1])

var minPathSum = function(grid) {
  const dp = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }, () => 0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < grid[0].length; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
  }
  for (let j = 1; j < grid.length; j++) {
    dp[j][0] = grid[j][0] + dp[j - 1][0];
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};

const res = minPathSum([[1,2,3],[4,5,6]]);
console.log(res);
