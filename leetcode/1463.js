var cherryPickup = function(grid) {
  const m = grid.length, n = grid[0].length;
  const memo = Array.from({ length: m }, () => Array.from({ length: n }, () => Array(n).fill(-1)));

  function dfs(i, j, k) {
    if (i === m || j < 0 || j >= n || k < 0 || k >= n) {
      return 0;
    }
    if (memo[i][j][k] !== -1) {
      return memo[i][j][k];
    }
    let res = 0;
    for (let j2 = j - 1; j2 <= j + 1; j2++) {
      for (let k2 = k - 1; k2 <= k + 1; k2++) {
        res = Math.max(res, dfs(i + 1, j2, k2));
      }
    }
    res += grid[i][j] + (j !== k ? grid[i][k] : 0);
    memo[i][j][k] = res;
    return res;
  }

  return dfs(0, 0, n - 1);
};

console.log(cherryPickup([[3,1,1],[2,5,1],[1,5,5],[2,1,1]]))
